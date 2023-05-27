const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');

router.get('/', OrderController.getOrders);

router.post('/', OrderController.createOrder);

router.put('/:orderId', OrderController.updateOrder);

module.exports = router;
