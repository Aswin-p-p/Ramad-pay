import React, { useState } from 'react';
import '../NgoComponent/NgoComponent.css';
import Swal from 'sweetalert2';




function PopupForm({ toggleForm }) {
      const [isChecked, setIsChecked] = useState(false);
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [phoneNumber, setPhoneNumber] = useState('');
    
     
      const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
      };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') setName(value);
        if (name === 'email') setEmail(value);
        if (name === 'phoneNumber') setPhoneNumber(value);
      };
    
      const validateForm = () => {
        if (!name || !email || !phoneNumber) {
          Swal.fire({
            icon: 'error',
            title: 'Missing Fields',
            text: 'Please fill in all fields.',
          });
          return false;
        }
    
        // Email validation
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
          Swal.fire({
            icon: 'error',
            title: 'Invalid Email',
            text: 'Please enter a valid email address.',
          });
          return false;
        }
    
        // Phone number validation
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phoneNumber)) {
          Swal.fire({
            icon: 'error',
            title: 'Invalid Phone Number',
            text: 'Please enter a valid 10-digit phone number.',
          });
          return false;
        }
    
        if (!isChecked) {
          Swal.fire({
            icon: 'warning',
            title: 'Agreement Required',
            text: 'Please agree to the terms to proceed.',
          });
          return false;
        }
    
        return true;
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (validateForm()) {
            fetch("https://ramadpayserver.onrender.com/api/submit-form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    phone: phoneNumber,
                    agreed: isChecked ? "Yes" : "No", 
                }),
            })
            .then((response) => response.json())
           
            
            .then((result) => {
    
                Swal.fire({
                    icon: "success",
                    title: "Form Submitted",
                    text: "Thank you for submitting the form!",
                });
    
                // Hide the form
    
                // Reset form fields
                setName ('');
                setEmail ('');
                setIsChecked (false);
                setPhoneNumber ('');
            })
            .catch((error) => {
                console.error("Error submitting form:", error);
    
                // Show error message
                Swal.fire({
                    icon: "error",
                    title: "Submission Failed",
                    text: "There was an error sending your form. Please try again.",
                });
            });
        }
    };
  return (
    <>
    
      <div className="container">
      <div className="popup">
        <div className="clsFrm-btn" onClick={toggleForm}>
          <i>&times;</i> {/* Close button */}
        </div>
        <h3>Your Information, Your Terms. Join Us Today!</h3>
        <form className="form" onSubmit={handleSubmit}>
          <div className="cntct-inputBox">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={handleInputChange}
              required
            />
          </div>
          <input
            type="number"
            placeholder="Phone Number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleInputChange}
            required
          />

          <div className="custom-chkbox d-flex col-30">
            <input
              type="checkbox"
              id="accountspop"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="accountspop">
              By clicking this box, you agree to receive SMS from us.
            </label>
          </div>

          <div className="join-btn">
            <button type="submit">Join Now</button>
          </div>
        </form>
      </div>
  </div>
    </>
  )
}

export default PopupForm