const express = require('express');
const router = express.Router();
const stripe = require('stripe')("sk_test_51QaVQfINYLjKABXEJvIOD0T9v9zZ2IFoX6gdWKUXz48EQrPi1eqsGu0J0pjZeDFr4qi0EbTC7HVP2r2LEq9pCgWP00E5mgGyyy");
const { v4: uuidv4 } = require('uuid');
const order = require('../Model/orderModel');

router.post('/placeOrder', async (req, res) => {
    const { Subtotal, token, currentUser, cartItems } = req.body;
    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })

        const payment = await stripe.charges.create(
            {
                amount: Subtotal * 100,
                currency: 'CAD',
                customer: customer.id,
                receipt_email: token.email,
            },
            {
                idempotencyKey: uuidv4(),
            }
        );
        if (payment) {
            const newOrder = new order({
                name: currentUser.name,
                email: currentUser.email,
                userid: currentUser._id,
                orderItems: cartItems,
                shippingAddress: {
                    street: token.card.address_line1,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    zip: token.card.address_zip,

                },
                transactionId: token.card.id,
                orderAmount: Subtotal
            })
            newOrder.save()
            res.send('order succesful')
        } else {
            return res.send({ status: 'Something went wrong ' })
        }
    } catch (err) {
        res.status(400).json({ status: 'something went wrong' + err })
        console.log(err)
    }
});


router.post('/getUserOrders', async (req, res) => {
    const { userid } = req.body;
    console.log(userid);
    try {
        const orders = await order.find({ userid: userid });
        if (orders) {
            console.log(orders)
            res.json(orders);
        }
    } catch (error) {
        return res.status(400).json({
            status: 'Something went wrong'
        });
    }
})


module.exports = router