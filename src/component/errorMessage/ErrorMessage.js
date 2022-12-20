import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = () => (
  <div className="message_err">
    <h3>
      No Statistics Found
    </h3>
    <span>Narrativa’s COVID-19 tracking project is no longer providing the API data.</span>
  </div>
);

export default ErrorMessage;
