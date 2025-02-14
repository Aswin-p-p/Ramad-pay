import React, { useEffect, useState } from 'react';
import './Hero.css'; // Corrected path for CSS import
import Hand from '../../../assets/images/heroImages/hand-1.png';
import heroSlideer from '/assets/Gif/heroSlideer.gif';
import Swal from "sweetalert2";
import PreLoader from '../../Preloader/PreLoader';



function Hero() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      agreed: false,
    });
  
    const [errors, setErrors] = useState({});
  
    const validateForm = () => {
      let newErrors = {};
    
      if (!formData.name.trim()) newErrors.name = "Name is required.";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Invalid email format.";
      }
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone Number is required.";
      } else if (!/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = "Invalid phone number.";
      }
      if (!formData.agreed) newErrors.agreed = "You must agree to the terms.";
    
      setErrors(newErrors);
      console.log("Validation Errors:", newErrors); // ✅ Debugging
    
      return Object.keys(newErrors).length === 0;
    };
    
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
    
      if (!validateForm()) {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Missing Details!",
          text: "Please check and complete the required fields.",
        });
        return;
      }
      
    
      try {
        const response = await fetch("https://ramadpayserver.onrender.com/api/submit-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
    
        if (response.ok) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Your application has been submitted successfully!",
          });
          setFormData({ name: "", email: "", phone: "", agreed: false });
;
          setErrors({});
        } else {
          throw new Error("Submission failed");
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong. Please try again later.",
        });
      } finally {
        setLoading(false); // ✅ Fix: Ensures loading state is reset in all cases
      }
    };
      const [isFormVisible, setIsFormVisible] = useState(false);
      useEffect(() => {
        const hasPopupBeenShown = sessionStorage.getItem("popupShown");

        if (!hasPopupBeenShown) {
            setIsFormVisible(true);
            sessionStorage.setItem("popupShown", "true"); // Store flag in localStorage
        }
    }, []);
    useEffect(() => {
      if (isFormVisible) {
        document.body.classList.add("no-scroll");
        requestAnimationFrame(() => {
          document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        });
      } else {
        document.body.classList.remove("no-scroll");
        document.body.style.backgroundColor = "";
      }
  
      return () => {
        document.body.classList.remove("no-scroll");
        document.body.style.backgroundColor = "";
      };
    }, [isFormVisible]);
      const toggleForm = () => {
        setIsFormVisible((prev) => !prev);
      };
  

    
      
    return (
        <>
        
     {loading && <PreLoader />}
            <section className="rmd-hroSection">
                <div className="container">
                    <div className="rmd-content">
                        <h1>
                            Swift Transfers, <br />
                            Stronger <br />
                            Connections
                        </h1>
                        <div className="sub-contents">
                            <h4>Fast Africa Money Transfer</h4>
                            <p>
                                Fast, secure, and reliable payment platform designed to simplify
                                money transfers and financial transactions. With a focus on
                                convenience and efficiency,
                            </p>
                            <div className="rmd-dwnldBtns">
                                <div className="appStore">
                                    <a href="#">
                                        <i className="fa-brands fa-apple"></i>
                                        <div>
                                            Download on the <br />
                                            <span>App Store</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="appStore">
                                    <a href="#">
                                        <i className="fa-brands fa-google-play"></i>
                                        <div>
                                            GET IT ON<br />
                                            <span>Google Play</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="download-Btn">
                                <a href="#">Download app</a>
                            </div>
                        </div>
                    </div>
                    <div className="mobSliding">
                        <div className="mobileBg">
                            <img src={Hand} alt="" />
                        </div>
                        <div className="screen">
                            <img src={heroSlideer} alt="" />
                        </div>
                    </div>
                </div>
            </section>


                  <section className={`hm-Popupcntct ${isFormVisible ? 'show' : ''}`}>
           
<div className="popcontainer">
<div className="closeBtn" onClick={toggleForm}>
                        CLOSE &nbsp; X
                    </div>
  <div className="hmpopup-contain">
  <div className="MobCls" onClick={toggleForm}><i className="fa-solid fa-xmark"></i></div>
 <div className="Pop-CntBnr"><img src="assets/home/cntctBnner.png" alt=""/></div>
    <div className="CntTxt-popup">
    <div className="PopupCnct-TXT">
      <h2>Become a
        Ramad Pay 
        Agent</h2>
        <p className="subCnt">Start Earning Commissions and Making a Difference</p>
        <p>Join the Ramad Pay Agent network for top commissions, strong support, and Text2Pay services. Apply now to revolutionize money transfers!</p>

        <div className="popArrw">
          <a href=""><img src="assets/home/pop-arrow.png" alt=""/></a>
        </div>
    </div>
  </div>
    <div className="CntTxt-popup">
      <div className="PopupFrm">
        <h2>Get Started</h2>
        <form >
      <input type="text" name="name" placeholder="Your Full Name" value={formData.name} onChange={handleChange} required />
      <input type="text" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
      <input type="number" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />

      <div className="custom-chkbox pophmCheck d-flex col-30">
        <input type="checkbox" id="accounts1" name="agreed" checked={formData.agreed} onChange={handleChange} />
        <label htmlFor="accounts1">
          By clicking this box, you agree to receive SMS from Ramad Pay Inc. You can reply STOP to opt-out at any time.
        </label>
      </div>

      <div className="pophmNxtBtn" onClick={handleSubmit}>
        <a type="submit" >Next</a>
      </div>
    </form>
      </div>
    </div>

    <div className="popup-manCnct">
      <img src="assets/home/manCnct.png" alt=""/>
    </div>

  </div>
</div>
</section>
        </>



    );
}

export default Hero;
