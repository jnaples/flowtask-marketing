import { NextRequest, NextResponse } from 'next/server'
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

console.log('Stripe Secret Key:', process.env.STRIPE_SECRET_KEY)

export async function POST(request: NextRequest) {
  try {
    const { amount } = await request.json()

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
      payment_method_types: ['card'],
    })

    return NextResponse.json({ clientSecret: paymentIntent.client_secret })
  } catch (error) {
    console.log(error)
    // Handle other errors (e.g. network issues, parsing errors)
    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 },
    )
  }
}
