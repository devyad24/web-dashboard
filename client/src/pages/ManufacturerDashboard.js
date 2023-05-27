import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManufacturerDashboard = () => {
  const [orders, setOrders] = useState([]);

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

  return (
    <div>
      <h1>Manufacturer Dashboard</h1>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            Order ID: {order.orderID}, To: {order.to}, From: {order.from}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManufacturerDashboard;
