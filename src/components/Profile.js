import React, { useState, useEffect } from 'react';

const Profile = () => {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        fetch(`https://dummyjson.com/users/${storedUser.id}`)
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem('user', JSON.stringify(data));
            setUser(data);
          })
          .catch((error) => console.error(error));
      }
    }, []);
  
    return (
      <div>
        <h1>Profile</h1>
        {user && (
          <div>
            <p>ID: {user.id}</p>
            <p>Username: {user.username}</p>
            {/* Display other user details */}
          </div>
        )}
      </div>
    );
  };
  export default Profile;