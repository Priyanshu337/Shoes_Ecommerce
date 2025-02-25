const { timeStamp } = require('console');
const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({

    name: { type: String, required: true },
    email: { type: String, required: true },
    userid: { type: String, required: true },
    orderItems: [],
    shippingAddress: { type: Object },
    orderAmount: { type: Number, required: true },
    isDelivered: { type: Boolean, required: true, default: false },
    transactionId: { type: String, required: true }
}, {
    timeStamps: true
});

const order = mongoose.model('orders', orderSchema);
module.exports = order;