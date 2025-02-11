import React, { useEffect, useState } from 'react'
import './CareerComponent.css'
import PageForm from '../PageForm/PageForm'
import Swal from 'sweetalert2';


function CareerComponent() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const [fileName, setFileName] = useState('');
  const [fileError, setFileError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const handleFileClick = () => {
    document.getElementById('real-file').click();  // Trigger file input click
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : null);

    // Check if file size is less than or equal to 512MB
    if (file && file.size > 536870912) {
      setFileError('File size exceeds 512MB');
    } else {
      setFileError('');
    }
  };


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const validateForm = () => {
    let isValid = true;
    // Reset all error messages
    const errors = {
      name: '',
      email: '',
      phone: '',
      file: '',
    };

    // Check for empty fields
    if (!formData.name) {
      errors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
      isValid = false;
    }
    if (!formData.phone || formData.phone.length !== 10) {
      errors.phone = 'Please enter a valid 10-digit phone number';
      isValid = false;
    }
    if (!fileName) {
      errors.file = 'Please upload a resume';
      isValid = false;
    }
    setErrorMessages(errors);

    return isValid;
  };
  const [errorMessages, setErrorMessages] = useState({
    name: '',
    email: '',
    phone: '',
    file: '',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      if (document.getElementById('real-file').files[0]) {
        formDataToSend.append('resume', document.getElementById('real-file').files[0]);
      }
  
      try {
        const response = await fetch('https://ramadpayserver.onrender.com/api/submit-career-form', {
          method: 'POST',
          body: formDataToSend,
        });
      
      
        let result;
        try {
          const text = await response.text(); // Read response as text first
          result = text ? JSON.parse(text) : {}; // Try parsing only if content exists
        } catch (jsonError) {
          console.error('JSON Parse Error:', jsonError);
          result = { error: 'Invalid JSON response from server' }; // Fallback error message
        }
        
      
   
      
        if (response.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Form submitted successfully!',
            text: 'Your details have been successfully submitted.',
          });
      
          setFormData({
            name: '',
            email: '',
            phone: '',
          });
          setFileName('');
          setFileError('');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Form submission failed!',
            text: result?.error || 'Something went wrong. Please try again.',
          });
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Form submission failed!',
          text: error.message || 'An error occurred while submitting the form.',
        });
        console.error('Error:', error);
      }
      
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Form submission failed!',
        text: 'Please fix the errors in the form.',
      });
    }
  };
  

  const toggleForm = () => {
    setIsFormVisible((prev) => !prev);
  };

  useEffect(() => {
    if (isFormVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll"); // Cleanup on unmount
    };
  }, [isFormVisible]);
  
  return (
  <>
 <main>
      <section className=" commonHro careerHro">
        <div className="container">
          <div className="cmpny-content">
            <h1 data-aos="fade-right">
              <span className="commSpn">  Join Us in </span> 
              Making a Difference
            </h1>   
        </div>

        <div className="commHdImg careerHdImg">
        <img src="assets/careers-img/careerbg.png" alt=""/>
        </div>
        </div>
      </section>
      <section className="CA-section">
          <div className="container">
            <div className="pageLink">
              <a href="">Home | Company | <span>Careers</span></a>
            </div>
        </div>
      </section>
      <section className="careerAppSec">
        <div className="container">
          <div className="commSecHead" data-aos="fade-up">
            <h2>
              Our team loves working 
              together
            </h2>
          </div>
          <div className="mapContBlk">
            <div className="Content-row">
            <div className="aboutSection" data-aos="fade-right">
              <div className="row abtRow">                      
                <div className="abt-content careerCont col-md-12 col-lg-6">
                  <div>
                    <h3>Passion Fuels Success</h3>
                    <p>
                      Discover the Distinctive Essence of a Career at RamadPay
                    </p>
                  <div  >  <a onClick={toggleForm}>Appy Now</a></div>
                    </div>
                </div>
                <div className="abtImg col-md-12 col-lg-6">
                  <img src="assets/careers-img/careerimg.png" alt=""/>
                </div>
              </div>
            </div>
            </div>
        </div>
        </div>
      </section>
      <section className="rmdSolu">
        <div className="container">
          <div className="commSecHead" data-aos="fade-up">
            <h2>
              We solve big problems
            </h2>
          </div>  
          <div className="soluContain">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="solBlk" data-aos="fade-right">
                  <div className="solIco">
                    <img src="assets/careers-img/transfer.png" alt=""/>
                  </div>
                    <div className="solCont">
                      <h3>Fast 
                        Transfers</h3>
                      <p>
                        We offer lightning-fast money transfers to help you send funds to your family and friends anywhere in the world, when they need it the most.
                      </p>
                    </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="solBlk" data-aos="fade-left">
                  <div className="solIco">
                    <img src="assets/careers-img/rates.png" alt=""/>
                  </div>
                    <div className="solCont">
                      <h3>Competitive 
                        Rates</h3>
                      <p>
                        We provide competitive exchange rates and low transfer fees to ensure that you get the most value out of your money.
                      </p>
                    </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="solBlk" data-aos="fade-right">
                  <div className="solIco">
                    <img src="assets/careers-img/secure.png" alt=""/>
                  </div>
                    <div className="solCont">
                      <h3>Secure and 
                        Trustworthy</h3>
                      <p>
                        Your security is our top priority. We use state-of-the-art encryption and security protocols to safeguard your financial transactions.
                      </p>
                    </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="solBlk" data-aos="fade-left">
                  <div className="solIco">
                    <img src="assets/careers-img/secure.png" alt=""/>
                  </div>
                    <div className="solCont">
                      <h3>Global 
                        Reach</h3>
                      <p>
                        With a wide network of partner banks and agents across different countries, we enable you to send money to numerous destinations around the globe.
                      </p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="guideSec">
        <div className="container" data-aos="fade">
          <div className="guidContain" data-aos="fade">
            <h2>
              Guided by Our Purpose
            </h2>
            <p>
              When you join our team, you’re embracing a meaningful journey of impacting lives worldwide. Our selection process is rigorous, seeking individuals who resonate with our values. Above all, we seek those who embody the spirit of pioneers and demonstrate genuine compassion for the communities we serve. Are you driven by audacious goals? Do you possess unwavering curiosity, dedication, and a fervent work ethic? If your answer is yes, we eagerly await the opportunity to connect with you.
            </p>
          </div>
        </div>
      </section>
      <section className="rmdCulture">
        <div className="container">
          <div className="cultContain" data-aos="fade">
            <h3>Our Culture</h3>
            <p>
              RamadPay is more than a company; it’s a community of diverse professionals who are committed to driving positive change. Our culture is built on collaboration, creativity, and continuous learning. We value initiative, encourage new ideas, and foster an environment where every team member’s voice is heard.
            </p>
          </div>
        </div>
      </section>
      <section className="rmdBenefit" >
        <div className="container">
          <div className="commSecHead">
            <h2>
              Benefits of Working with Us
            </h2>
          </div>  
          <div className="benefContain">
            <div className="row">
              <div className="col-md-4">
                <div className="benBlk">
                  <div className="benIco">
                    <img src="assets/careers-img/package.png" alt=""/>
                  </div>
                    <div className="benCont">
                      <h4>Competitive 
                        compensation and 
                        benefits package</h4>
                    </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="benBlk">
                  <div className="benIco">
                    <img src="assets/careers-img/opportunity.png" alt=""/>
                  </div>
                    <div className="benCont">
                      <h4>Opportunities for career advancement</h4>
                    </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="benBlk">
                  <div className="benIco">
                    <img src="assets/careers-img/learning.png" alt=""/>
                  </div>
                    <div className="benCont">
                      <h4>Professional development and learning opportunities</h4>
                    </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="benBlk">
                  <div className="benIco">
                    <img src="assets/careers-img/collab.png" alt=""/>
                  </div>
                    <div className="benCont">
                      <h4>A collaborative and supportive work environment</h4>
                    </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="benBlk">
                  <div className="benIco">
                    <img src="assets/careers-img/flexible.png" alt=""/>
                  </div>
                    <div className="benCont">
                      <h4>Flexibility and work-life balance</h4>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageForm/>
      </main>



     

      <section className={`Career-popup ${isFormVisible ? 'show' : ''}`} >

      <div className="container">
      <div className="popupCr">
        <div className="clsFrm-btn" onClick={toggleForm}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <form className="pop-form" >
          <div className="frm-txt">
            <div className="label">Name</div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errorMessages.name && <div className="error">{errorMessages.name}</div>}
          </div>
          <div className="frm-txt">
            <div className="label">Email</div>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errorMessages.email && <div className="error">{errorMessages.email}</div>}
          </div>
          <div className="frm-txt">
            <div className="label">Phone</div>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errorMessages.phone && <div className="error">{errorMessages.phone}</div>}
          </div>
          <div className="frm-txt">
            <div className="label">Upload Resume</div>
            <div className="custome-field">
              <input
                type="file"
                id="real-file"
                hidden
                onChange={handleFileChange}
              />
              <button type="button" id="custom-button" onClick={handleFileClick}>
                Choose File
              </button>
              <span id="custom-text">{fileName || 'No file chosen'}</span>
            </div>
            {fileError && <div className="error">{fileError}</div>}
            {errorMessages.file && <div className="error">{errorMessages.file}</div>}
            <div className="file-size">Max. file size: 512MB</div>
          </div>

          <div className="sub-Btn" >
            <a type="submit" onClick={handleSubmit}>Submit</a>
          </div>
        </form>
      </div>
    </div>
  </section>
  </>
  )
}

export default CareerComponent