import React, { useState } from "react";
import Swal from "sweetalert2";
import { FiX } from "react-icons/fi";

function AuthModal({ onClose, setUser }) {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const apiUrl = isLogin
        ? "http://localhost:5000/api/login"
        : "http://localhost:5000/api/register";

      const response = await fetch(apiUrl, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log(data);

      if (response.ok) {

        
        setUser({
          username: data.username,
          email: data.email,
        });

        
        if (data.token) {
          localStorage.setItem(
            "token",
            data.token
          );
        }

        Swal.fire({
          title: "Success!",
          text: data.message,
          icon: "success",
          confirmButtonColor: "#007BFF",
        });

        onClose();

      } else {

        Swal.fire({
          title: "Error!",
          text: data.message,
          icon: "error",
          confirmButtonColor: "#d33",
        });

      }

    } catch (error) {

      console.log(error);

      Swal.fire({
        title: "Network Error",
        text: "Could not connect to server.",
        icon: "error",
        confirmButtonColor: "#d33",
      });

    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>

        
        <button
          onClick={onClose}
          style={styles.closeBtn}
        >
          <FiX size={24} />
        </button>

        
        <h2 style={styles.title}>
          {isLogin
            ? "Sign In"
            : "Create Account"}
        </h2>

      
        <form
          onSubmit={handleSubmit}
          style={styles.form}
        >

        
          {!isLogin && (
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              style={styles.input}
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />

          
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />

          
          <button
            type="submit"
            style={styles.submitBtn}
          >
            {isLogin
              ? "Login"
              : "Sign Up"}
          </button>
        </form>

      
        <p style={styles.bottomText}>
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <span
            onClick={() =>
              setIsLogin(!isLogin)
            }
            style={styles.toggleText}
          >
            {isLogin
              ? " Sign Up"
              : " Login"}
          </span>
        </p>

      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },

  modal: {
    backgroundColor: "white",
    width: "100%",
    maxWidth: "400px",
    padding: "30px",
    borderRadius: "12px",
    position: "relative",
    boxShadow:
      "0 10px 25px rgba(0,0,0,0.15)",
  },

  closeBtn: {
    position: "absolute",
    top: "15px",
    right: "15px",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#64748b",
  },

  title: {
    textAlign: "center",
    marginBottom: "25px",
    color: "#0f172a",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  input: {
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    outline: "none",
    fontSize: "15px",
  },

  submitBtn: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  bottomText: {
    textAlign: "center",
    marginTop: "18px",
    fontSize: "14px",
    color: "#475569",
  },

  toggleText: {
    color: "#007BFF",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default AuthModal;