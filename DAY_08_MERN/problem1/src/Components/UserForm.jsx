import React, { useState, useRef } from 'react';

const UserForm = () => {
  // State for controlled input
  const [name, setName] = useState('');
  // Ref for uncontrolled input
  const emailInputRef = useRef(null);
  // State for validation message
  const [validationMessage, setValidationMessage] = useState('');

  // Handler for controlled input change
  const handleNameChange = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 3) {
      setValidationMessage('Name must be at least 3 characters long.');
    } else {
      setValidationMessage('');
    }
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Accessing uncontrolled input value using ref
    const email = emailInputRef.current.value;
    // Logging values to console
    console.log('Name:', name);
    console.log('Email:', email);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Controlled input for name */}
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        {validationMessage && <p style={{ color: 'red' }}>{validationMessage}</p>}
      </div>
      {/* Uncontrolled input for email using ref */}
      <div>
        <label>Email:</label>
        <input
          type="text"
          ref={emailInputRef}
        />
      </div>
      {/* Submit button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
