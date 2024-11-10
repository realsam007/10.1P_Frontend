import React from 'react';

const Navigation = () => {
  return (
    <div className="navigation-container">
      <div>
        <h3>Explore</h3>
        <ul>
          <li>Home</li>
          <li>Questions</li>
          <li>Articles</li>
          <li>Tutorials</li>
        </ul>
      </div>
      <div>
        <h3>Support</h3>
        <ul>
          <li>FAQs</li>
          <li>Help</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <h3>Stay connected</h3>
        <ul style={{ display: 'flex', gap: '10px' }}>
          <li><a href="#"><img src="path/to/facebook-icon.png" alt="Facebook" /></a></li>
          <li><a href="#"><img src="path/to/twitter-icon.png" alt="Twitter" /></a></li>
          <li><a href="#"><img src="path/to/instagram-icon.png" alt="Instagram" /></a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
