import React, { useState } from "react";
import usr_icon from "../../assets/user.png";
import password_icon from "../../assets/password.png";
import email_icon from "../../assets/email.png";
import "./form.css";

export const SignUpLogIn = () => {
  const [authAction, setAuthAction] = useState("Create Account");

  const [formInputs, setFormInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const validationErrors = {};
    const nameRegex = /^[a-zA-Z][a-zA-Z0-9-_]{3,16}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!formInputs.name.trim()){
      validationErrors.name = "username is required";
    } else if(!nameRegex.test(formInputs.name)){
      validationErrors.name = "Please enter a valid name (3-16 characters, letters and numbers only).";
    }

    if(!formInputs.email.trim()){
      validationErrors.email = "email is required";
    } else if(!emailRegex.test(formInputs.email)){
      validationErrors.email = "please enter a valid email";
    }

    if(!formInputs.password.trim()){
      validationErrors.password = "password is required";
    } else if(formInputs.password.length < 8){
      validationErrors.password = "Password must be at least 8 characters long.";
    }

    
    setErrors(validationErrors);

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateInputs();

    if (authAction === "Create Account") {
      console.log("Signing up:", formInputs);
      // Handle signup logic here
    } else {
      console.log("Logging in:", formInputs);
      // Handle login logic here
    }
  };

  const switchForm = () => {
    setAuthAction(authAction === "Create Account" ? "Login" : "Create Account");
    setFormInput({ name: "", email: "", password: "" });
  };

  return (
    <div className="Container">
      <div className="text">
        <h2>{authAction}</h2>
      </div>

      <form className="forms" onSubmit={handleSubmit}>
        {authAction === "Create Account" && (
          <div className="input">
            <img src={usr_icon} alt="" />
            <input
              type="text"
              placeholder="Full Name"
              value={formInputs.name}
              onChange={(e) => {
                setFormInput({ ...formInputs, name: e.target.value });
              }}
            />
            {errors.name && <span className='error'>{errors.name}</span>
            }
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email"
            value={formInputs.email}
            onChange={(e) => {
              setFormInput({ ...formInputs, email: e.target.value });
            }}
          />
          {errors.email && <span className='error'>{errors.email}</span>}
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            value={formInputs.password}
            onChange={(e) => {
              setFormInput({ ...formInputs, password: e.target.value });
            }}
          />
          {errors.password && <span className='error'>{errors.password}</span>}
        </div>

        <div className="submit-buttons">
          <button className="submit" type="submit">
            {authAction === "Create Account" ? "Sign Up" : "Login"}
          </button>
        </div>
      </form>

      <p>
        {authAction === "Create Account" ? (
          <>
            Already have an account?
            <button
              type="button"
              onClick={switchForm}
              className="switch-button"
            >
              Login here
            </button>
          </>
        ) : (
          <>
            Don't have an account?
            <button
              type="button"
              onClick={switchForm}
              className="switch-button"
            >
              Sign up here
            </button>
          </>
        )}
      </p>
    </div>
  );
};
