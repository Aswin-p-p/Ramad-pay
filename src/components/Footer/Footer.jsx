import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <>
            <footer className="rmdFtr">
                <div className="footer-container" >
                    <div className="container">
                        <div className="row col-flex">
                            <div className="ftrSec">
                                <div className="FtrLogo">
                                    <img src="assets/logo.png" alt="" />
                                </div>
                            </div>

                            <div className="ftrSec">
                                <h4>Services</h4>
                                <div className="FtrService">
                                    <ul>
                                        <li><a href="/p2premittance">P2P Remittance Services</a></li>
                                        <li><a href="/ngo">NGO</a></li>
                                        <li><a href="/b2b">B2B</a></li>
                                        <li><a href="">Ramad Pay App</a></li>
                                        <li><a href="/globalpayment">Global Payments</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ftrSec">
                                <h4>Company</h4>
                                <div className="FtrService Company">
                                    <ul>
                                        <li><a href="/company">Company</a></li>
                                        <li><a href="/aboutus">About us</a></li>
                                        <li><a href="/Teams">Team</a></li>
                                        <li><a href="/career">Careers</a></li>
                                        <li><a href="/Compliance">Compliance</a></li>
                                        <li><a href="/partnership">Partnerships</a></li>
                                        <li><a href="/investor-relations">Investor Relations</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ftrSec">
                                <h4>Others</h4>
                                <div className="FtrService">
                                    <ul>
                                        <li><a href="/blog">News</a></li>
                                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                                        <li><a href="/term-of-use">Terms of Use</a></li>
                                        <li><a href="/Compliance">Compliance</a></li>
                                        <li><a href="/licenses">Licenses</a></li>
                                        <li><a href="/find-agent">Find An Agent</a></li>
                                        <li>
                                            <a href="/">IT Policy</a>
                                            <span className="new-label">new</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cntctSec ftrSec">
                                <h4>Contact Details</h4>
                                <div className="Ftr-contact">
                                    <div className="cntct-dtls">
                                        <div id="locImg"><img src="assets/footer/locate.png" alt="" /></div>
                                        <div>
                                            <p>2429 East Franklin Avenue, Minneapolis, MN 55406</p>
                                        </div>
                                    </div>
                                    <div className="cntct-dtls">
                                        <div><img src="assets/footer/email.png" alt="" /></div>
                                        <div><p>info@ramadpay.com</p></div>
                                    </div>
                                    <div className="cntct-dtls">
                                        <div><img src="assets/footer/ftCall.png" alt="" /></div>
                                        <div>
                                            <p>
                                                Toll-Free <span className='phnfooter'>1-888-611-0753</span> <br />
                                                (Mon-Fri) 09:00 AM - 6:00 PM
                                            </p>
                                        </div>
                                    </div>
                                    <div className="agent" >
                                        <p id="agent-head">Agent Portal</p>
                                        <div className="cntct-dtls">
                                            <div id="locImg1"><img src="assets/footer/locate.png" alt="" /></div>
                                            <div>
                                                <p>
                                                    24/7 Customer Support in English, Oromo, Swahili,
                                                    Arabic, Amharic and Somali.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="socailMedia">
                    <p>
                        We are authorized to transmit money in many U.S. states and to expand.
                        NMLS ID:1139908
                    </p>
                    <p>&copy;2023 Ramad Pay, Inc. All rights reserved.</p>
                    <div className="mediaLinks">
                        <div>
                            <a href="https://www.facebook.com/RamadPay" target='_blank'><i className="fa-brands fa-facebook-f"></i></a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/company/ramadpay/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/ramadpay/" target='_blank'><i className="fa-brands fa-instagram"></i></a>
                        </div>
                        {/* <div>
                            <a href=""><i className="fa-brands fa-youtube" ></i></a>
                        </div> */}
                        <div>
                            <a href='https://st.ramadpay.com/'  target='_blank' ><i className="fa-brands fa-google"></i></a>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer