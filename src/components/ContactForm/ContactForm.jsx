import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import "./ContactForm.scss";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Name must be at least 4 characters")
    .required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .test("is-valid-email", "Email is invalid", (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    }),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

const ContactForm = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="contact-form-container">
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          setIsModalOpen(true);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className="contact-form">
            <div className="form-group">
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className={
                  errors.name && touched.name ? "input-error" : ""
                }
              />
              <ErrorMessage
                name="name"
                component="span"
                className="error"
              />
            </div>
            <div className="form-group">
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className={
                  errors.email && touched.email ? "input-error" : ""
                }
              />
              <ErrorMessage
                name="email"
                component="span"
                className="error"
              />
            </div>
            <div className="form-group">
              <Field
                as="textarea"
                id="message"
                name="message"
                placeholder="Enter your message"
                className={
                  errors.message && touched.message
                    ? "input-error"
                    : ""
                }
              />
              <ErrorMessage
                name="message"
                component="span"
                className="error"
              />
            </div>
            <button type="submit">Send</button>
          </Form>
        )}
      </Formik>
      {isModalOpen && (
        <motion.div
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-content"
            initial={{ y: "-100vh" }}
            animate={{ y: "0" }}
          >
            <p>Your message was sent!</p>
            <button onClick={() => setIsModalOpen(false)}>
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ContactForm;
