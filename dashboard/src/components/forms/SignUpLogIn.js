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

  const handleSubmit = (e) => {
    e.preventDefault();
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
