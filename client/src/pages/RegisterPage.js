import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [address, setAddress] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Make the API call to register the user
      const response = await axios.post('/api/users/register', {
        username,
        password,
        role,
        address,
      });

      console.log(response.data); // Handle success response
    } catch (error) {
      console.error(error.response.data); // Handle error response
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        {/* Form fields */}
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {/* Other form fields */}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
