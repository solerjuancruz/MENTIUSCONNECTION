import React, { useState } from "react";
import axios from "axios";
import qs from "qs";

export default function Create() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = async () => {
    const userData = {
      name: name,
      surname: surname,
      email: email,
      password: password,
    };

    try {
      const formData = qs.stringify(userData);

      const response = await axios.post("http://127.0.0.1:8000/api/users", formData, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      console.log(response);
      alert("User created successfully!");
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Failed to create user.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser();
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Surname:</label>
          <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}