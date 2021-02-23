import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SectionLine from "../../components/SectionLine/SectionLine";
import Layout from "../../components/shared/Layout";
import sendEmail from "../../services/emails";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
  });
  const [sent, setSent] = useState(false);

  const sendForm = async () => {
    const resp = await sendEmail(formData);
    return resp;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = sendForm();
    if (response) {
      setSent(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    setSent(false);
  }, []);

  return (
    <Layout>
      <div className="contact-page-container">
        <div className="contact-page-header">
          Contact Me!
          <SectionLine />
        </div>

        <div className="contact-page-blurb">
          Drop a line if you want to work on a project (Software or Theater!){" "}
          <br /> or if you just want to say hi!
          <div className="contact-page-email">
            {"<email/>"} :{" "}
            <a href="mailto: newton.evyn@gmail.com">newton.evyn@gmail.com</a>
          </div>
        </div>
        {!sent ? (
          <form className="contact-form" onSubmit={(e) => handleSubmit(e)}>
            <label className="contact-form-label" htmlFor="name-input">
              Name
            </label>
            <input
              className="contact-form-input"
              id="name-input"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <label className="contact-form-label" htmlFor="email-input">
              Email
            </label>
            <input
              className="contact-form-input"
              id="email-input"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label className="contact-form-label" htmlFor="content-input">
              Message
            </label>
            <textarea
              className="contact-form-input"
              id="email-input"
              type="email"
              placeholder="Message"
              value={formData.content}
              name="content"
              onChange={handleChange}
              rows="5"
              cols="30"
            />
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        ) : (
          <div className="sent-div">
            <div className="sent">Message Sent!</div>
            <Link className="submit-button" to="/">
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
}
