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


            {/* <div className={`popup-frm ${isFormVisible ? 'show' : ''}`}>
               <HomePageForm/>
      </div> */}
        </>



    );
}

export default Hero;
