import React from "react";

export default function Login() {
  return (
    <div className="body_login">
      <div className="login">
        <h1 className="login__heading">Mentius Connection</h1>
        <form method="POST">
          <input type="text" name="userName" placeholder="User" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit" className="tipoSubmit">
            Ingresar
          </button>
        </form>
        <span className="login__circuit-mask"></span>
      </div>
    </div>
  );
}
