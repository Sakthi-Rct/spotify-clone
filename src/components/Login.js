import React from "react";
import "../Login.css";
import { loginUrl } from "../spotify";

function Login() {
  return (
    <div className="login">
      <div className="login__wrap">
        <img
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt="Spotify"
        />
        <a href={loginUrl}>LOGIN IN WITH SPOTIFY</a>
      </div>
    </div>
  );
}

export default Login;
