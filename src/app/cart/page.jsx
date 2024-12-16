'use client'

import convertToSubcurrency from '@/lib/convertToSubcurrency'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutPage from '../../components/CheckoutPage'

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error('NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined')
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

export default function Cart() {
  const amount = 4.99

  return (
    <main className="mx-auto w-6/12 rounded-md border bg-blue-600 p-6 text-center text-white">
      <div className="mb-10">
        <span className="mb-6 font-bold">Monthly subscription: ${amount}</span>
      </div>

      <Elements
        stripe={stripePromise}
        options={{
          mode: 'subscription',
          amount: convertToSubcurrency(amount),
          currency: 'usd',
        }}
      >
        <CheckoutPage amount={amount} />
      </Elements>
    </main>
  )
}
