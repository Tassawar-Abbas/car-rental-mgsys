'use server'

import connectDb from './db'
import Order from './models/order';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

 const paymentMethod = async (body) => {
    try {
        await connectDb();
        const transformedItem = [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: body.title,
                    },
                    unit_amount: body.price * 100,
                },
                quantity: 1,
            }
        ]
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: transformedItem,
            mode: 'payment',
            success_url: `${process.env.APP_URL}/success`,
            cancel_url: `${process.env.APP_URL}/cancel`,
        })
        if (session) {
            const order = new Order(body);
            const orderData = await order.save();
            if (orderData) return session.url;
        }

    }
    catch (err) {
        console.log(`Error in generating payment: ${err}`)
    }
}
export default paymentMethod;