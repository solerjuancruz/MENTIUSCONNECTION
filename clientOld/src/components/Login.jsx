import React from "react";
/* import axios from "axios"; */

export default function Login() {
 /*  const endpoint = "http://127.0.0.1:8000/api/login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    console.log(email);
    console.log(password);
    try {
      
     const response = await axios.post(endpoint, { email, password }); 
    console.log(response.data.status);
      if (response.data.status === "success") {
        console.log("Inicio de sesión exitoso. Token:", response.data.token);

      } else {
        setError("Credenciales inválidas. Inténtalo de nuevo.");
      }
    } catch (error) {
      setError("Error al intentar iniciar sesión.");
    }
  }; */

  return (
    <div className="body_login">
      <div className="login">
      <h1 className="login__heading">Mentius Connection</h1>
        <form method="POST">
            <input type="text" name="userName" placeholder="User"/>
            <input type="password" name="password" placeholder="Password"/>
            <button type="submit" class="tipoSubmit">Ingresar</button>
        </form>
       <span class="login__circuit-mask"></span>
      </div>
    </div>
  );
}
