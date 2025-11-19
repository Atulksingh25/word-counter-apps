// FormValidation.js
import React, { useState } from "react";

export default function FormValidation() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.includes("@")) newErrors.email = "Invalid email";
    if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted Successfully!");
    }
    setErrors(validationErrors);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="name"
            placeholder="Enter Name"
            value={form.name}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.name}</p>
        </div>
        <div>
          <input
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.email}</p>
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.password}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


