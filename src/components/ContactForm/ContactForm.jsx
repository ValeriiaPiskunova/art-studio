import React, { useState } from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateForm = () => {
    const errors = {};

    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";

    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setIsModalOpen(true);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />
          {formErrors.name && (
            <span className="error">{formErrors.name}</span>
          )}
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
          {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
        </div>
        <div className="form-group">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Enter your message"
            required
          ></textarea>
          {formErrors.message && (
            <span className="error">{formErrors.message}</span>
          )}
        </div>
        <button type="submit">Send</button>
      </form>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>Your message sent</p>
            <button onClick={() => setIsModalOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
