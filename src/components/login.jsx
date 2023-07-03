import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/img/Logo.svg";
import "../app.css";
import "../styles/login.css";
import Swal from "sweetalert2";
import axios from "axios";
import backendPort from "../config";
import { useStateContext } from "../context/contextProvider";

const Login = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `http://rms-staging.eba-rupr98zx.us-west-1.elasticbeanstalk.com:3000/auth/local/signin`,
        {
          email,
          password,
        }
      );
      if (response.status === 200) {
        setLoggedIn(true);
        navigate("/listingsAdmin");
      } else {
        Swal.fire({
          icon: "error",
          title: "Invalid Credentials",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred during login.",
      });
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return regex.test(email);
  };
  return (
    <div className="loginBgContainer">
      <div className="LoginContainer">
        <img className="logo" src={Logo} alt="Logo" />
        <div className="form">
          <input
            className="inputs"
            type="email"
            name="text"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="inputs"
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="forgotPassword" className="forgot">
            Forgot password?
          </a>
          <button
            className="button"
            onClick={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
