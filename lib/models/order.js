import { model, models, Schema } from "mongoose";

const orderSchema = new Schema({
    pickUpDate: { type: String, required: true },
    pickupTime: { type: String, required: true },
    source: { type: String, required: true },
    destination: { type: String, required: true },
    persons: { type: String, required: true },
    transferType: { type: String, required: true },
    imgUrl: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: String, required: true },
    subTitle: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    comment: { type: String, required: true },
})
const Order = models.Order || model('Order', orderSchema)
export default Order;