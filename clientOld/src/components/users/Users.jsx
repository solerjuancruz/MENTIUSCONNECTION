import React, { useEffect, useState } from "react";
import axios from "axios";


export default function Users() {
  const endpoint = "http://127.0.0.1:8000/api";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const response = await axios.get(`${endpoint}/users`);
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  };

  return (
    <div>
      <ul>
        {users.length > 0 ? (
          users.map((user) => <li key={user.id}>{user.name}</li>)
        ) : (
          <li>No hay usuarios disponibles.</li>
        )}
      </ul>
    </div>
  );
}

/*
  Con fetch
*/

/* import React, { useEffect, useState } from "react";



export default function Users() {

  const [users, setUsers] = useState([]);

  const getAllUsers = ()=>{
    fetch("http://127.0.0.1:8000/api/users")
    .then(res=>{return res.json()})
    .then(response=>{
    
      setUsers(response.users)
      
    })
    .catch(error=>{console.log(error)})
  }

  useEffect(()=>{
    getAllUsers();
    console.log(users.users)
  },[]);

  return (
    <div>
    <ul>
    {users.length > 0 ? (
        users.map((user) => <li key={user.id}>{user.name}</li>)
      ) : (
        <li>No hay usuarios disponibles.</li>
      )}  
    </ul>
  </div>
  );
} */
