import { useState } from "react";


const EditProfile = ({ name, email, bio, onSave }) => {
    const [editedName, setEditedName] = useState(name);
    const [editedEmail, setEditedEmail] = useState(email);
    const [editedBio, setEditedBio] = useState(bio);
  
    const handleSave = () => {
      onSave({ name: editedName, email: editedEmail, bio: editedBio });
    };
  
    return (
      <div>
        <h2>Edit Profile</h2>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Bio:</label>
          <textarea
            value={editedBio}
            onChange={(e) => setEditedBio(e.target.value)}
          />
        </div>
        <button onClick={handleSave}>Save</button>
      </div>
    );
  };
  
  export default EditProfile;