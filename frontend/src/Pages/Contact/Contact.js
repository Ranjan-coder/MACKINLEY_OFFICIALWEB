import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Contact_style from "../Contact/Contact.module.css";
import support from "../../Assets/support.svg";
import mail from "../../Assets/email.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    product: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      // Submit the form
    } else {
      setErrors(newErrors);
    }
  };

  const Data = [
    { Logo: support, Title: "Support", Details: "+91 88966 19811" },
    { Logo: mail, Title: "Email", Details: "contactus@mackinlay.in" },
  ];

  return (
    <div className={Contact_style.contact_form}>
      <Container className={Contact_style.contact_details_form}>
        <Row className="justify-content-center align-items-center">
          <Col xl={6} lg={6} md={12}>
            <div className={Contact_style.contact_content}>
              <div className={Contact_style.contact_title}>
                Need Help? <br /> Contact Mackinlay
              </div>
              <div className={Contact_style.contact_content}>
                Doesn’t matter if you are new to us or already a part of the
                Mackinlay family, we are here to help. Reach out to us for
                anything you need and we will do our best to resolve your
                inquiry.
              </div>
              <div className={Contact_style.contact_details_title}>
                Contact Us
              </div>
              {Data.map((value, index) => (
                <div
                  className={Contact_style.contact_details_container}
                  key={index}
                >
                  <div className={Contact_style.contact_details_logo}>
                    <img
                      src={value.Logo}
                      alt=""
                      className={Contact_style.contact_details_logo_image}
                    />
                  </div>
                  <div className={Contact_style.contact_details_logo_title}>
                    {value.Title}:
                  </div>
                  <div className={Contact_style.contact_details_number}>
                    {value.Details}
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col xl={3} lg={4} md={12}>
            <form onSubmit={handleSubmit} noValidate>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Name"
                className={Contact_style.contact_name}
              />
              {errors.name && (
                <span className={Contact_style.error}>{errors.name}</span>
              )}
              <br />
              <br />

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
                className={Contact_style.contact_email}
              />
              {errors.email && (
                <span className={Contact_style.error}>{errors.email}</span>
              )}
              <br />
              <br />

              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                className={Contact_style.cntctselect}
              >
                <option value="">Select a product</option>
                <option
                  value="hrconnectpro"
                  className={Contact_style.cntctselect_drop}
                >
                  HRConnect Pro
                </option>
                <option
                  value="connectera"
                  className={Contact_style.cntctselect_drop}
                >
                  ConnectEra
                </option>
                <option
                  value="mediai"
                  className={Contact_style.cntctselect_drop}
                >
                  MediAI Connect
                </option>
                <option
                  value="globalguardian"
                  className={Contact_style.cntctselect_drop}
                >
                  Global Guardian 
                </option>
                <option
                  value="WorldSync"
                  className={Contact_style.cntctselect_drop}
                >
                  WorldSync!
                </option>
              </select>
              <br />
              <br />

              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone"
                className={Contact_style.contact_phone}
              />
              {errors.phone && (
                <span className={Contact_style.error}>{errors.phone}</span>
              )}
              <br />
              <br />

              <textarea
                id="message"
                name="message"
                rows="4"
                cols="50"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                className={Contact_style.contact_message}
              ></textarea>
              {errors.message && (
                <span className={Contact_style.error}>{errors.message}</span>
              )}
              <br />
              <br />

              <button type="submit" className={Contact_style.contact_button}>
                Submit
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
