import React, { useState } from 'react';
import axios from 'axios';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/subscribe', { email });
      setMessage(response.data);
    } catch (error) {
      setMessage('Error subscribing. Please try again.');
    }
  };

  return (
    <div className="newsletter-container">
      <form onSubmit={handleSubmit}>
        <label>
          Enter your email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Subscribe</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default NewsletterForm;
