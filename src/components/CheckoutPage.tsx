'use client'

import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useEffect, useState } from 'react'
import convertToSubcurrency from '../lib/convertToSubcurrency'

export default function CheckoutPage({ amount }) {
  const stripe = useStripe()
  const elements = useElements()
  const [errorMessage, setErrorMessage] = useState(null)
  const [clientSecret, setClientSecret] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [amount])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)

    // defensive programming - if stripe or elements hasn't loaded yet, return
    if (!stripe || !elements) {
      return
    }

    const { error: submitError } = await elements.submit()

    if (submitError) {
      setErrorMessage(submitError.message)
      setLoading(false)
      return
    }

    console.log('clientSecret:', clientSecret)
    console.log(amount)

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `https://app.getflowtask.com/signup`,
      },
    })

    if (error) {
      // If error with payment, show customer the error (for example, payment details incomplete).
      setErrorMessage(error.message)
    } else {
      // The payment UI automatically closes with a success animation.
      // Your customer is redirected to your `return_url`.
    }

    setLoading(false)
  }

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="text-surface inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-md bg-white p-6">
      {clientSecret && <PaymentElement />}
      {errorMessage && <div>{errorMessage}</div>}
      <button
        className="mt-6 w-full rounded-full bg-blue-600 py-3 text-white transition-all duration-300 hover:bg-blue-700 disabled:animate-pulse disabled:opacity-50"
        disabled={!stripe || loading}
      >
        {!loading ? `Pay $${amount}` : 'Processing'}
      </button>
    </form>
  )
}
