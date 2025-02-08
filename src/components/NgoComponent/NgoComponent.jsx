import React, { useState } from 'react';
import './NgoComponent.css';
import Swal from 'sweetalert2';
import PageForm from '../PageForm/PageForm';
import emailjs from "@emailjs/browser";


function NgoComponent() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const toggleForm = () => {
    setIsFormVisible((prev) => !prev);
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
        // Send email using EmailJS
        emailjs.send(
            "service_pis0sas", // Replace with your EmailJS Service ID
            "template_qntyted", // Replace with your EmailJS Template ID
            {
                name: name,
                email: email,
                phone: phoneNumber,
                agreed: isChecked ? "Yes" : "No", // Convert boolean to Yes/No
            },
            "1_0N8ymh4FiCQNo14" // Replace with your EmailJS Public Key
        ).then(
            (response) => {
               

                // Show success message
                Swal.fire({
                    icon: "success",
                    title: "Form Submitted",
                    text: "Thank you for submitting the form!",
                });

                // Hide the form
                setIsFormVisible(false);

                // Reset form fields
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    agreed: false,
                });
            },
            (error) => {
                console.error("Error sending email:", error);

                // Show error message
                Swal.fire({
                    icon: "error",
                    title: "Submission Failed",
                    text: "There was an error sending your form. Please try again.",
                });
            }
        );
    }
};

  return (
   <>
    <main>
        <section className=" commonHro serviceInAreaHero">
            <div className="container">
                <div className="cmpny-content">
                    <h1 data-aos="fade-right" data-aos-duration="1000">
                        <span className="commSpn"> Partnering </span>
                        for Positive Change
                    </h1>
                </div>
                <div className="commHdImg ngoImgHd">
                    <img src="assets/ngo-img/img.png" alt=""/>
                </div>
                </div>
        </section>
        <section className="CA-section">
            <div className="container">
                <div className="pageLink">
                    <a href="">Home | Company | <span>Our Service Agent</span></a>
                </div>
            </div>
        </section>
        <section className=" rmdNgo">
            <div className="container">
                    <div className="tite">
                        <h2>
                          Welcome to RamadPay’s NGO page! As advocates of financial inclusion, our mission is to empower individuals and families by:
                        </h2>
                    </div>
                    <div className="ngoContContain">
                      <div className="Content-row">
                        <div className="aboutSection" data-aos="fade-right" data-aos-duration="1000">
                            <div className="row abtRow">
                                <div className="abt-content rmdNgoInCont col-md-12 col-lg-6">
                                    <div className="ngoPtCOnt">
                                      <ul>
                                        <li>
                                          Making financial services accessible and affordable for all, especially the unbanked and underserved.

                                        </li>
                                        <li>
                                            Supporting financial literacy programs to increase knowledge and capability.
                                        </li>
                                        <li>
                                          Partnering with government, private sector, and civil society to create an enabling environment.
                                        </li>
                                      </ul>
                                      <p>

                                      </p>
                                      <div className="primeBtn"  onClick={toggleForm}>
                                        <a >Get in touch</a>
                                      </div>
                                    </div>
                                </div>
                                <div className="abtImg col-md-12 col-lg-6">
                                  <div className="ngoImg">
                                    <img src="assets/ngo-img/ngoimg.jpg" alt=""/>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </section>
        <section className="rmdNgoSeco">
          <div className="container">
            <div className="title">
              <h3>Ramad Pay is an Advocate for Financial Inclusion for all</h3>
              <p className="advPara">
                  RamadPay enables financial inclusion through our remittance services by:
              </p>
            </div>
            <div className="ngoSecoPt">
              <ul>
                <li>Offering fast, affordable transfers to over 180 countries</li>
                <li>
                  Providing access to the unbanked via mobile money and digital wallets.
                </li>
                <li>
                  Supporting financial literacy to increase capability.
                </li>
                <li>
                  Together, we can build an inclusive financial system that empowers families globally.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className=" rmdNgo">
          <div className="container">
                  <div className="tite">
                      <h2>
                        The Power of Supporting Humanitarian Efforts
                      </h2>
                      <p>
                        Having experienced firsthand the struggles of being a refugee, RamadPay’s founders are committed to supporting humanitarian efforts through our remittance services.
                      </p>
                  </div>
                  <div className="ngoContContain">
                    <div className="Content-row">
                      <div className="aboutSection" data-aos="fade-right" data-aos-duration="1000">
                          <div className="row abtRow">
                            <div className="abtImg col-md-12 col-lg-6">
                              <div className="ngoImg">
                                <img src="assets/ngo-img/ngoimg2.jpg" alt=""/>
                              </div>
                            </div>
                              <div className="abt-content serArInCont col-md-12 col-lg-6">
                                  <div className="ngoPtCOnt">
                                    <h3>We aim to:</h3>
                                    <ul>
                                      <li>
                                        Empower refugees by facilitating financial access and inclusion.

                                      </li>
                                      <li>
                                        Partner with aid organizations to get funds directly into the hands of those in need.

                                      </li>
                                      <li>
                                        Advocate for policies that uphold the rights and dignity of displaced people worldwide.
                                      </li>
                                    </ul>
                                  </div>
                              </div>

                          </div>
                      </div>
                  </div>
                  </div>
          </div>
      </section>
      <section className="Ngoremittances rmdNgoSeco">
        <div className="container">
          <div className="title">
            <h3>The Impact of Remittances on Financial Inclusion</h3>
          </div>
          <div className="ngoSecoPt">
            <p>Remittances promote financial inclusion by bringing unbanked recipients into the formal financial system. Ramad Pay facilitates this through partnerships enabling digital transfers, reducing costs, and offering accounts/services tailored to recipients’ needs.
            </p>
            <p>Our user-focused approach also promotes literacy and women’s access. Ultimately, remittances can drive broader financial development when leveraged properly </p>
          </div>
        </div>
      </section>
      <section className=" rmdNgo">
        <div className="container">
                <div className="tite">
                    <h2>
                      Unlocking Everyone's Potential with Remittances
                    </h2>
                    <p className="advPara">Ramad Pay unlocks potential with remittances. Our services:</p>
                </div>
                <div className="ngoContContain">
                  <div className="Content-row">
                    <div className="aboutSection" data-aos="fade-right" data-aos-duration="1000">
                        <div className="row abtRow">
                            <div className="abt-content rmdNgoInCont col-md-12 col-lg-6">
                                <div className="ngoPtCOnt">
                                  <ul>
                                    <li>
                                      Low fees
                                    </li>
                                    <li>
                                      Fast transfers
                                    </li>
                                    <li>
                                      Wide reach
                                    </li>
                                  </ul>
                                  <p>
                                    We make sending money abroad easy and affordable. This empowers families to cover basic needs, invest in education, grow businesses, and more. Remittances through Ramad Pay promote financial inclusion worldwide
                                  </p>
                                </div>
                            </div>
                            <div className="abtImg col-md-12 col-lg-6">
                              <div className="ngoImg">
                                <img src="assets/ngo-img/ngoimg3.jpg" alt=""/>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    </section>
    <section className="rmdNgoVidSec">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <div className="rmdNgoVid">
              <div className="vid">
                <iframe width="100%" height="512" src="https://www.youtube.com/embed/Wy0G54Nr7xE?si=werupcb3wUyBFvDe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="rmdNgoVidCont">
              <h3>Join us to promote financial 
                inclusion worldwide.</h3>
                <p>
                  Remittances offer a powerful tool to:
                </p>
                <ul>
                  <li>Expand access to financial services</li>
                  <li>Enable the underserved to save, borrow, and insure</li>
                  <li>
                    Unlock human potential through economic participation
                  </li>
                  <li>
                    Build an inclusive global communityTogether, we can drive financial inclusion for all.
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <PageForm/>
    </main>

  
    <div className={`popup-frm ${isFormVisible ? 'show' : ''}`}>
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
      </div>
   </>
  )
}

export default NgoComponent