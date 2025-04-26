import React, { useState } from "react";
import "../login/Login.css";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Login() {
  const [action, setAction] = useState("Sign Up");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate=useNavigate();

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const checkLogin = () => {
    const storedData = sessionStorage.getItem("userData");
    const users = JSON.parse(storedData);

    if (formData.email.length !== 0 && formData.password.length !== 0) {
      const user = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      );
      if (user) {
        console.log("Logged In");
        sessionStorage.setItem("currentUser",JSON.stringify(user))
        navigate("/dashboard");
      } else {
        alert("Wrong Credentials");
      }
    } else {
      alert("Enter Credentials first");
    }
  };

  const handleSignUp = () => {
    let newUser = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      password: formData.password.trim(),
    };
    let users = [];

    if (sessionStorage.getItem("userData")) {
      users = JSON.parse(sessionStorage.getItem("userData"));
    }
    if (
      newUser.name.length !== 0 &&
      newUser.email.length !== 0 &&
      newUser.password.length !== 0
    ) {
      users.push(newUser);
      sessionStorage.setItem("userData", JSON.stringify(users));
    } else {
      alert("Fill all the Details");
      return;
    }
    setFormData({ name: "", email: "", password: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentAction = action;
    currentAction === "Sign Up" ? handleSignUp() : checkLogin();
  };

  return (
    <div className="signup-container ">
      <div className="submit-container">
        <button
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          SignUp
        </button>
        <button
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </button>
      </div>
      <form>
        <div className="inputs mt-[40px] flex flex-col gap-[25px]">
          <div className={action === "Login" ? "input hidden-input" : "input"}>
            <IoPersonOutline className="signup-icons" />
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleUserChange}
              value={formData.name}
            />
          </div>
          <div className="input">
            <TfiEmail className="signup-icons" />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleUserChange}
              value={formData.email}
            />
          </div>
          <div className="input">
            <RiLockPasswordLine className="signup-icons" />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleUserChange}
              value={formData.password}
            />
          </div>
          <div className="submit-btn">
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </form>
      <br />
      <p>Post Sign-up, Go to Login</p>
    </div>
  );
}

export default Login;
