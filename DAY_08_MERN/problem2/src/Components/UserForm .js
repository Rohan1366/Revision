import React from 'react';
import { useTheme } from '../Context/ThemeContext ';

const UserForm = () => {
  const { theme } = useTheme();

  const formStyle = {
    background: theme === 'light' ? '#ffffff' : '#333333',
    color: theme === 'light' ? '#000000' : '#ffffff',
    padding: '20px',
    borderRadius: '5px',
    marginBottom: '20px',
  };

  return (
    <div style={formStyle}>
      <h2>User Form</h2>
      {/* Form content */}
    </div>
  );
};

export default UserForm;
