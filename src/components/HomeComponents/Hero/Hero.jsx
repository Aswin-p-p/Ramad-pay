import React, { useEffect, useState } from 'react';
import './Hero.css'; // Corrected path for CSS import
import Hand from '../../../assets/images/heroImages/hand-1.png';
import heroSlideer from '/assets/Gif/heroSlideer.gif';
import PopupForm from '../../PopupForm/PopupForm';
import HomePageForm from '../../HomePageForm/HomePageForm';

function Hero() {
      const [isFormVisible, setIsFormVisible] = useState(false);


      useEffect(() => {
        // Check if popup has been shown before
        const hasPopupBeenShown = sessionStorage.getItem("popupShown");

        

        if (!hasPopupBeenShown) {
            setIsFormVisible(true);
            sessionStorage.setItem("popupShown", "true"); // Store flag in localStorage
        }
    }, []);
      const toggleForm = () => {
        setIsFormVisible((prev) => !prev);
      };
      
    
      
    return (
        <>
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
           
<div class="popcontainer">
<div className="closeBtn" onClick={toggleForm}>
                        CLOSE &nbsp; X
                    </div>
  <div class="hmpopup-contain">
  <div class="MobCls" onClick={toggleForm}><i class="fa-solid fa-xmark"></i></div>
 <div class="Pop-CntBnr"><img src="assets/home/cntctBnner.png" alt=""/></div>
    <div class="CntTxt-popup">
    <div class="PopupCnct-TXT">
      <h2>Become a
        Ramad Pay 
        Agent</h2>
        <p class="subCnt">Start Earning Commissions and Making a Difference</p>
        <p>Join the Ramad Pay Agent network for top commissions, strong support, and Text2Pay services. Apply now to revolutionize money transfers!</p>

        <div class="popArrw">
          <a href=""><img src="assets/home/pop-arrow.png" alt=""/></a>
        </div>
    </div>
  </div>
    <div class="CntTxt-popup">
      <div class="PopupFrm">
        <h2>Get Started</h2>
        <form>
          <input type="text" placeholder="Your Full Name " required/>
          <input type="text" placeholder="Email Address" required/>
          <input type="number" placeholder="Phone Number" />

          <div class="custom-chkbox pophmCheck d-flex col-30">
            <input type="checkbox" id="accounts"/>
            <label for="accounts">By clicking this box, you agree to receive SMS from Ramad Pay Inc, you can reply stop to opt-out at any time, this is my Privacy Policy. If the box is not clicked, then the form should not be sent</label>
        </div>

        <div class="pophmNxtBtn">
          <a href="">Next</a>
        </div>
        </form>
      </div>
    </div>

    <div class="popup-manCnct">
      <img src="assets/home/manCnct.png" alt=""/>
    </div>

  </div>
</div>
</section>
        </>



    );
}

export default Hero;
