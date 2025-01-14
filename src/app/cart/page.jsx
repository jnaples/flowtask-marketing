'use client'

import { Elements } from '@stripe/react-stripe-js'
// import { loadStripe } from '@stripe/stripe-js'
import convertToSubcurrency from '@/lib/convertToSubcurrency'
import CheckoutPage from '@/components/CheckoutPage'

// if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
//   throw new Error('NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined')
// }
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

export default function Home() {
  const amount = 49.99

  return (
    <main className="m-10 mx-auto max-w-6xl rounded-md border bg-gradient-to-tr from-blue-500 to-purple-500 p-10 text-center text-white">
      <div className="mb-10">
        <h1 className="mb-2 text-4xl font-extrabold">Sonny</h1>
        <h2 className="text-2xl">
          has requested
          <span className="font-bold"> ${amount}</span>
        </h2>
      </div>

      <Elements
        // stripe={stripePromise}
        options={{
          mode: 'payment',
          amount: convertToSubcurrency(amount),
          currency: 'usd',
        }}
      >
        <CheckoutPage amount={amount} />
      </Elements>
    </main>
  )
}
