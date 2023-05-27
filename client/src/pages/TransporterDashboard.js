import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransporterDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      // Make the API call to fetch orders
      const response = await axios.get('/api/orders');

      setOrders(response.data);
    } catch (error) {
      console.error(error.response.data); // Handle error response
    }
  };

  const handleReply = async (e) => {
    e.preventDefault();

    try {
      // Make the API call to send the reply
      const response = await axios.put(`/api/orders/${selectedOrderId}`, {
        price,
      });

      console.log(response.data); // Handle success response
    } catch (error) {
      console.error(error.response.data); // Handle error response
    }
  };

  return (
    <div>
      <h1>Transporter Dashboard</h1>
      <select value={selectedOrderId} onChange={(e) => setSelectedOrderId(e.target.value)}>
        <option value="">Select Order ID</option>
        {orders.map((order) => (
          <option key={order._id} value={order._id}>
            {order.orderID}
          </option>
        ))}
      </select>

      <form onSubmit={handleReply}>
        <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />

        <button type="submit">Reply</button>
      </form>
    </div>
  );
};

export default TransporterDashboard;
