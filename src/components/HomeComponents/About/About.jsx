import { useEffect, useRef } from "react";
import './About.css'
import SampleVideo from '../../../../public/assets/Video/Ramappayhomevdo.mp4'

function About() {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            video.play();   
            const timer = setTimeout(() => {
                video.pause(); 
            }, 3000);

            return () => clearTimeout(timer); 
        }
    }, []);
    return (
        <>
            <section className="payment-contain">
                <div className="container">
                    <div className="row">
                        <div className="pymnt-details col-md-6">
                            <h4 data-aos="fade-down" data-aos-duration="1000">
                                Ramad Pay: Revolutionizing Payments with Speed and Security
                            </h4>
                            <p data-aos="fade-down" data-aos-duration="1000">
                                RamadPay is a payment platform that offers fast, secure, and
                                convenient financial services. It allows users to transfer
                                money, make payments, and conduct transactions seamlessly,
                                focusing on providing simple solutions for both individuals and
                                businesses. RamadPay is designed to cater to global payments,
                                offering reliability, speed, and user-friendly features to meet
                                the needs of a diverse customer base. Whether it's for personal
                                or business use, RamadPay ensures smooth and efficient payment
                                processes.
                            </p>

                            <div className="dwnldBtns" data-aos="fade-down" data-aos-duration="1000">
                                <div className="get-app" >
                                    <a href=""><i className="fa-brands fa-apple"></i>
                                        <div className='button-dwd'>Download on the <br /><span>App Store</span></div></a>
                                </div>
                                <div className="get-app" >
                                    <a href="#"
                                    ><i className="fa-brands fa-google-play"></i>
                                        <div className='button-dwd'>GET IT ON<br /><span>Google Play</span></div></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-down" data-aos-duration="1000">
                            <div className="video">
                                <video ref={videoRef} width="100%" controls muted>
                                    <source src={SampleVideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About