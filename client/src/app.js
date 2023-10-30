// App.js
import React, { useState, useEffect } from 'react';
import TaskBoard from './components/TaskBoard';
import Login from './components/Login';

const App = () => {
  const [user, setUser] = useState(null);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user data and lists from the server
        const userResponse = await fetch('http://localhost:5000/auth/user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          // You might need to include credentials based on your authentication setup
          credentials: 'include',
        });

        const listsResponse = await fetch('http://localhost:5000/lists', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          // You might need to include credentials based on your authentication setup
          credentials: 'include',
        });

        if (userResponse.ok && listsResponse.ok) {
          const userData = await userResponse.json();
          const listsData = await listsResponse.json();
          setUser(userData);
          setLists(listsData);
        } else {
          // Handle error responses
          console.log('Error fetching data');
        }
      } catch (error) {
        console.error('Error during data fetching:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {user ? (
        <TaskBoard lists={lists} />
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
