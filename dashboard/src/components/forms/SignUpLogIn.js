import React, { useState } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";
import { v4 as uuidv4 } from "uuid";
import usr_icon from "../../assets/user.png";
import password_icon from "../../assets/password.png";
import email_icon from "../../assets/email.png";
import { useNavigate } from "react-router-dom";
import "./form.css";

export const SignUpLogIn = () => {
  const [authAction, setAuthAction] = useState("Create Account");
  const [users, setusers] = useState([]);

  const [formInputs, setFormInput] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate()

  const [errors, setErrors] = useState({});

  //switching between login and signup
  const switchForm = () => {
    setAuthAction(authAction === "Create Account" ? "Login" : "Create Account");
    setFormInput({ userName: "", email: "", password: "" });
    setErrors({});
  };

//function to check validation for input fields
  const validateInputs = () => {
    const validationErrors = {};
    const nameRegex = /^[a-zA-Z][a-zA-Z0-9-_]{3,16}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (authAction === "Create Account") {
      if (!formInputs.userName.trim()) {
        validationErrors.userName = "username is required";
      } else if (!nameRegex.test(formInputs.name)) {
        validationErrors.userName =
          "Please enter a valid name (3-16 characters, letters and numbers only).";
      }
    }
    
    if (!formInputs.email.trim()) {
      validationErrors.email = "email is required";
    } else if (!emailRegex.test(formInputs.email)) {
      validationErrors.email = "please enter a valid email";
    }

    if (!formInputs.password.trim()) {
      validationErrors.password = "password is required";
    } else if (formInputs.password.length < 8) {
      validationErrors.password =
        "Password must be at least 8 characters long.";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

//hashing the password before storing in json file and during login
  const hashPassword = () => {
    return CryptoJS.SHA256(formInputs.password).toString();
  };


//handling signup
const HandleSignUp = () => {
  const hashedPassword = hashPassword();

  const usersUrl = "http://localhost:3001/userData";
  axios.get(usersUrl)
    .then((response) => {
      setusers(response.data) ;
      const user = users.find(user => user.email === formInputs.email);

      // Check if the email is already registered
      if (user) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "This email is already registered.",
        }));
        return;
      }
      const newUserId = uuidv4(); 
      // If the email is not registered, proceed with signup
      const newUser = {
        id: newUserId,
        userName: formInputs.userName,
        email: formInputs.email,
        password: hashedPassword,
      };

      axios.post(usersUrl, newUser)
        .then((response) => console.log("Signup successful:", response.data))
        .catch((err) => console.error("Signup error:", err));
        navigate(`/Createcategory/${newUserId}`);

    })
    .catch((err) => console.error("Error fetching users:", err));


};

//handling login 
    const handleLogIn = () => {
      const hashedPassword = hashPassword();

      const usersUrl =
        "http://localhost:3001/userData";
      axios.get(usersUrl)
        .then((response) => {
         const users = (response.data);
          const user = users.find(user => user.email === formInputs.email);
          navigate(`/Categories/${user.id}`);
        //checks if user exists
          if (!user) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              email: "User does not exist.",
            }));
            return;
          }

        //checks if user entered the correct password
          if (user.password !== hashedPassword) {
            console.log("Incorrect password.");
            setErrors((prevErrors) => ({ ...prevErrors, password: "Incorrect password." }));
            return;
          }

        })
        .catch((err) => console.error("Error fetching users:", err));
    };

    //handling submit 
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!validateInputs()) {
        return;
      }
    if (authAction === "Create Account") {
      console.log("Signing up:", formInputs);
      HandleSignUp();
    } else {
      console.log("Logging in:", formInputs);
      handleLogIn();
    }

  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInput(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
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
              name="userName"
              placeholder="Full Name"
              value={formInputs.userName}
              onChange={handleInputChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input
             type="email"
             name="email"
             placeholder="Email"
             value={formInputs.email}
             onChange={handleInputChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input
              type="password"
              name="password"
              placeholder="Password"
              value={formInputs.password}
              onChange={handleInputChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
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
