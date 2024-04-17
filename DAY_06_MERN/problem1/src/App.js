import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import UserProfile from './Components/UserProfile'
import EditProfile from './Components/EditProfile'
function App() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'I am a software developer.',
  });
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => {
    setIsEditMode((prevMode) => !prevMode);
  };

  const handleUpdate = (userData) => {
    setUser(userData);
    setIsEditMode(false);
  };

  return (
    <div>
      {isEditMode ? (
        <EditProfile {...user} onUpdate={handleUpdate} />
      ) : (
        <UserProfile {...user} />
      )}
      <button onClick={toggleEditMode}>
        {isEditMode ? 'View Mode' : 'Edit Mode'}
      </button>
    </div>
  )
}

export default App;
