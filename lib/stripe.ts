import Stripe from "stripe"
import { STRIPE_SECRET_KEY } from "./config"

const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: "2023-08-16",
})

export async function createPaymentIntent(amount: number, currency = "usd") {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    })
    return paymentIntent
  } catch (error) {
    console.error("Error creating payment intent:", error)
    throw error
  }
}

