const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderID: { type: String, required: true },
  to: { type: String, required: true },
  from: { type: String, required: true },
  quantity: { type: Number, required: true },
  address: { type: String, required: true },
  transporter: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  price: { type: Number },
});

module.exports = mongoose.model('Order', orderSchema);
