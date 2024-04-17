import React, { useState } from 'react';

const ContactList = () => {
  // State for contacts array and form input fields
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a unique id for the new contact
    const id = Date.now().toString();
    // Create a new contact object
    const newContact = { id, name, email };
    // Add the new contact to the contacts array
    setContacts([...contacts, newContact]);
    // Clear the form fields
    setName('');
    setEmail('');
  };

  return (
    <div>
      {/* Form to add a new contact */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Add Contact</button>
      </form>

      {/* List of contacts */}
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <strong>{contact.name}</strong>: {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
