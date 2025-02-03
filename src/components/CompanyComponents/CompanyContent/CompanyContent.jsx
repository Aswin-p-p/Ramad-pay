import React from 'react';
import './CompanyContent.css';
import PageLinks from '../../PageLinks/PageLink'
import PageForm from '../../PageForm/PageForm';


function CompanyContent() {
    return (
        <>
            <section className="cmpny-hroSection compnybanner">
                <div className="container">
                    <div className="cmpny-content ">
                        <h1 data-aos="fade-right" data-aos-duration="1000">
                            About RamadPay
                        </h1>
                        <p data-aos="fade-right" data-aos-duration="1000">
                            Welcome to RamadPay, your trusted partner for seamless and secure cross-border financial solutions. At RamadPay, we’re committed to simplifying international transactions, empowering individuals and businesses to send and receive money with confidence.
                        </p>
                        <div className="readmore-btn" data-aos="fade-right" data-aos-duration="1000">
                            <a href="/Teams" aria-label="Read more about RamadPay">Read More</a>
                        </div>
                    </div>

                    <div className="pgHeadImg compnimg">
                        <img src='assets/company/bannerImg.png' alt="About RamadPay Banner" />
                    </div>
                </div>
            </section>
            <section className="CA-section">
                <PageLinks />
                <div className="container">
                    <div className="cmpAbt-details">
                        <div className="CmpAbt">
                            <h3 data-aos="fade-down" data-aos-duration="1000">Compliance<span> at RamadPay</span></h3>
                            <div className="Content-row">
                                <div className="aboutSection" data-aos="fade-right" data-aos-duration="1000">

                                    <div className="row abtRow">
                                        <div className="abtImg col-md-6">
                                            <img src="assets/company/compliance.webp" alt="" />
                                        </div>
                                        <div className="abt-content col-md-6">
                                            <div>
                                                <p>At RamadPay, compliance is at the core of everything we do. We understand the importance of adhering to laws and regulations to ensure the security and integrity of our financial services. Our commitment to compliance is unwavering, and we strive to maintain the highest standards of transparency, security, and ethical conduct.</p>

                                                <div className="moreBtn"><a href="/Compliance">Explore More</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="CmpAbt">
                            <h3 data-aos="fade-down" data-aos-duration="1000">Investor Relations<span> at RamadPay</span></h3>
                            <div className="Content-row">
                                <div className="aboutSection" data-aos="fade-left" data-aos-duration="1000">

                                    <div className="row abtRow reverse">

                                        <div className="abt-content col-md-6">
                                            <div className="colmn">
                                                <div></div>
                                                <p>We value the trust and support of our investors, and this page serves as a hub for information about our financial performance, strategy, and initiatives. Here, you’ll find the latest updates on our company’s progress and how we’re driving growth and value.</p>

                                                <div className="moreBtn"><a href="/investor-relations">Explore More</a></div>
                                            </div>
                                        </div>
                                        <div className="abtImg col-md-6">
                                            <img src="assets/company/Investor-relationship.webp" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="CmpAbt">
                            <h3 data-aos="fade-up" data-aos-duration="1000"><span>RamadPay</span> Partnerships</h3>
                            <div className="Content-row">
                                <div className="aboutSection" data-aos="fade-right" data-aos-duration="1000">

                                    <div className="row abtRow">
                                        <div className="abtImg col-md-6">
                                            <img src="assets/company/partnership.webp" alt="" />
                                        </div>
                                        <div className="abt-content col-md-6">
                                            <div>
                                                <p>We believe that collaboration is at the heart of innovation and progress. Through strategic partnerships, we’re able to enhance our services, expand our reach, and provide even greater value to our customers. Explore our diverse partnerships and alliances that drive our mission forward.</p>

                                                <div className="moreBtn"><a href="/partnership">Explore More</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="CmpAbt">
                            <h3 data-aos="fade-down" data-aos-duration="1000">Meet the<span> RamadPay Team</span></h3>
                            <div className="Content-row">
                                <div className="aboutSection" data-aos="fade-left" data-aos-duration="1000">

                                    <div className="row abtRow reverse">

                                        <div className="abt-content col-md-6">
                                            <div className="colmn">
                                                <p>Our success is driven by the dedication, expertise, and passion of our talented team members. Get to know the individuals who are shaping the future of global financial transactions.</p>

                                                <div className="moreBtn"><a href="Teams">Explore More</a></div>
                                            </div>
                                        </div>
                                        <div className="abtImg col-md-6">
                                            <img src="assets/company/Remittance-Team.webp" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="CmpAbt">
                            <h3 data-aos="fade-down" data-aos-duration="1000">Join Our Team<span> at RamadPay</span></h3>
                            <div className="Content-row">
                                <div className="aboutSection" data-aos="fade-right" data-aos-duration="1000">

                                    <div className="row abtRow">
                                        <div className="abtImg col-md-6">
                                            <img src="assets/company/careers.webp" alt="" />
                                        </div>
                                        <div className="abt-content col-md-6">
                                            <div>
                                                <p>We’re always on the lookout for talented individuals who are passionate about reshaping the world of global financial transactions. If you’re looking for a dynamic and innovative work environment where your skills can thrive, consider joining us on our journey.</p>

                                                <div className="moreBtn"><a href="Teams">Explore More</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <PageForm/>
        </>

    );
}

export default CompanyContent;
