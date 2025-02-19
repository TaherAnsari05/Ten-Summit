import "./ContactPage.css";
import { useState } from "react";
import { FaTags, FaComments, FaComment, FaFileContract } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    country: "",
    phone: "",
    message: ""
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
  };
  const countries = ["United States", "United Kingdom", "India", "Canada", "Germany"];
  return (
    <div className="container">
      <div className="header">
        <h1>Contact Us</h1>
        <p>Data-intensive apps? Learn about NoSQL at a monstrous scale. Drop us a line, and we'll be in touch.</p>
        <button>Chat Now</button>
      </div>
      <div className="main-content">
        <div className="info-section">
          <div className="info-card">
            <div>
              <h3>Collaborate & Get Answers</h3>
              <p>Go To Community Forum</p>
              <p>Join Slack</p>
            </div>
            <div className="tags">
              {<FaFileContract />}
              </div>
          </div>
          <div className="info-card">
            <div>
              <h3>Get Pricing</h3>
              <p>See Scylla Cloud Pricing</p>
              <p>Get Enterprise Pricing</p>
            </div>
            <div className="tags">
              {<FaTags />}
              </div>
          </div>

          <div className="info-card">
            <div>
              <h3>Contact Support</h3>
              <p>Safeguard your SLAs with ScyllaDB Support</p>
              <p>Get In Touch</p>
            </div>
            <div className="tags">
              {<FaComments />}
              </div>
          </div>
      </div>

        <div className="contact-form">
          <h2>General Questions?</h2>
          <p>Drop us a line, and we'll be in touch.</p>
          <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" placeholder="First Name" required onChange={handleChange} />
            <input type="text" name="lastName" placeholder="Last Name" required onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
            <input type="text" name="company" placeholder="Company" required onChange={handleChange} />
            <select required>
    <option value="">Select Country</option>
    {countries.map((country, index) => (
        <option key={index} value={country.toLowerCase()}>{country}</option>
    ))}
</select>
            <input type="tel" name="phone" placeholder="Phone" required onChange={handleChange} />
            <textarea name="message" placeholder="How can we help?" required onChange={handleChange}></textarea>
            <button type="submit">Contact Us</button>
          </form>
          <p>Your information will be handled as detailed in our privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
