import React, { useState } from "react";
import "../styles/ContactUs.css";
import contactpizza from "../images/contactpizza.jpg";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("localhost:3000/pizzas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Successfully submitted the form
        // Display a success message here
      } else {
        // Handle errors or display error messages to the user
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div
      className="contact-form-container"
      style={{ backgroundImage: `url(${contactpizza})` }}
    >
      <h2 className="contact-header">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="name-box">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="email-box">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="message-box">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
