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
  const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
  "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
  "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)",
  "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatinifmr", "Ethiopia", "Fiji",
  "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea",
  "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
  "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
  "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives",
  "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia",
  "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
  "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine",
  "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
  "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
  "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",
  "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
  "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
  "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
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
