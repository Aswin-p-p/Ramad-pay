import React from 'react'
import './Introduce.css';
import Man from '../../../assets/images/man.png'
import '../Hero/Hero.css'
function Introduce() {
    return (
        <>
            <section className="rmd-introduce">
                <div className="container">
                    <div className="futurePay">
                        <h3 data-aos="fade-right" data-aos-duration="1000">Experience the Future of Payments</h3>
                        <div className="txt-content">
                            <p data-aos="fade-right" data-aos-duration="1000">
                                Introducing Ramad Pay's <br />
                                New Text2Pay Service
                            </p>
                        </div>
                        <div className="cntct" data-aos="fade-right" data-aos-duration="1000">
                            <p>For Text2Pay remittances,</p>
                            <p id="connect">Call: (612) 260-7900.</p>
                        </div>
                    </div>
                    <div className="personImg" data-aos="zoom-in" data-aos-duration="1000">
                        <img src={Man} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Introduce