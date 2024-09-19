import React from 'react';
import './CustomerService.css'; // Import your CSS file for styling

const CustomerService = () => {
  return (
    <div className="customer-service-page">
        Customer
      <div className="content">
        <h1>Customer Service & Support</h1>
        <h2>Looking for more than just a repair?</h2>
        <div className="line"></div>
        <p className="subheading">
          We troubleshoot and repair hardware and software issues, optimize performance, 
          and provide setup and maintenance services for both PCs and tablets.
        </p>
        <h3>For Quick Assistance : +1-650-899-9698</h3>
        <h1 className="care-message">We Care To Serve Best As We Can</h1>

        <button className="chat-now-btn">Chat Now</button>

        <div className="steps">
          <p><span>&#10003;</span> Start Chat</p>
          <p> -------- </p>
          <p><span>&#10003;</span> Schedule Appointment</p>
          <p> -------- </p>
          <p><span>&#10003;</span> Get Device Repaired</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
