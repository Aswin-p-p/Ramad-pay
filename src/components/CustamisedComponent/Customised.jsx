import React, { useEffect, useState } from 'react';
import './Customised.css'
import PageForm from '../PageForm/PageForm'
import PopupForm from '../PopupForm/PopupForm';



function Customised() {
   const [isFormVisible, setIsFormVisible] = useState(false);

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
      <section className=" commonHro serviceInAreaHero">
            <div className="container">
                <div className="cmpny-content">
                    <h1 data-aos="fade-right" data-aos-duration="1000">
                        <span className="commSpn">The Benefits   </span>
                        of a Customized <br/> Ramad Pay App
                    </h1>
                </div>
                <div className="commHdImg custHdImg">
                    <img src="assets/customized/customisedog.png" alt=""/>
                </div>
                </div>
        </section>
        <section className="CA-section">
            <div className="container">
                <div className="pageLink">
                    <a href="">Home | Service | <span>Customized App</span></a>
                </div>
            </div>
        </section>
        <section className="glbPaySec">
            <div className="container">
                    <div className="ngoContContain">
                      <div className="Content-row">
                        <div className="aboutSection" data-aos="fade-right" data-aos-duration="1000">
                            <div className="row abtRow">
                                <div className="abt-content rmdNgoInCont col-md-12 col-lg-6">
                                    <div className="gpCOnt">
                                      <p>
                                        Get an interest-free customized debit card with Aziz Capital’s virtual checking account. Send and receive money quickly with Ramad Pay’s digital payments. Open an account and get your customized card with just a few clicks. Spend securely online and in-store with this innovative fintech solution.
                                      </p>
                                      <div className="primeBtn">
                                        <a onClick={toggleForm}>Get Started</a>
                                      </div>
                                    </div>
                                </div>
                                <div className="abtImg col-md-12 col-lg-6">
                                  <div className="ngoImg">
                                    <img src="assets/customized/custimg.jpg" alt=""/>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </section>
        <section className="rmdInterconnected">
          <div className="container">
            <div className="title">
              <p className="intrPara">Experience financial convenience</p>
              <h3>
                Unlock Convenience of Ramad Pay App
              </h3>
            </div>
            <div className="rmdInterCont">
              <p>
                Ramad Pay App and RamadPay Remittance Solutions are here to make your life easier. Whether traveling, shopping, sending or receiving money, or gifting someone special, our services conveniently manage your transactions quickly and securely. Our innovative solutions offer the latest in payment security features so that you can rest assured knowing your information is safe with us. We strive to provide an effortless experience for all our customers so they can focus on what matters most – their lives!
              </p>
            </div>
          </div>
        </section>
        <section className="whyRmdPay">
          <div className="container">
            <div className="title">
              <h2>Why RamadPay?</h2>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="whyRmdBlk">
                  <div className="whyRmdIco">
                    <img src="assets/globalpayment/ease.png" alt=""/>
                  </div>
                  <div className="whyRmdCont">
                    <h3>Ease of Use</h3>
                    <p>
                      The Ramad Pay App is designed for simplicity and user-friendliness.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="whyRmdBlk">
                  <div className="whyRmdIco">
                    <img src="assets/globalpayment/support.png" alt=""/>
                  </div>
                  <div className="whyRmdCont">
                    <h3>24/7 Support</h3>
                    <p>
                      Our customer support is available around the clock to assist with any inquiries.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="whyRmdBlk">
                  <div className="whyRmdIco">
                    <img src="assets/globalpayment/transparent.png" alt=""/>
                  </div>
                  <div className="whyRmdCont">
                    <h3>Transparent Fees</h3>
                    <p>
                        We're committed to transparency. Our fee structures are straightforward and easily accessible.
                    </p>
                  </div>
                </div>
              </div>            
            </div>
          </div>
        </section>
        <section className="whyGlbPayment">
          <div className="container">
            <div className="whyGlbContain">
              <div className="whyGlbBlk">
                  <h2>Why Choose RamadPay App?</h2>
                  <div className="whtGlbRw">
                    <div className="Content-row">
                      <div className="aboutSection" data-aos="fade-right" data-aos-duration="1000">
                          <div className="row abtRow">
                            <div className="abtImg col-md-12 col-lg-6">
                              <div className="whyGlbImg">
                                <img src="assets/customized/custimg2.jpg" alt=""/>
                              </div>
                            </div>
                              <div className="abt-content whtGlbInCont col-md-12 col-lg-6">
                                  <div className="WhyGlbPt">
                                    <ul>
                                      <li>Instant Global Transfers: Send and receive money instantly across borders without the hassle of traditional banking procedures or high fees.</li>
                                      <li>
                                        Competitive Exchange Rates: Access real-time, favorable exchange rates to maximize your money’s value on every international transaction.
                                      </li>
                                      <li>
                                        Unmatched Security & Convenience: Enjoy top-tier security measures combined with a user-friendly interface, ensuring your financial transactions are both safe and effortless.
                                      </li>
                                    </ul>
                                  </div>
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
        </main>

        <div className={`popup-frm ${isFormVisible ? 'show' : ''}`}>
       <PopupForm toggleForm={toggleForm} />
      </div>
    </>
  )
}

export default Customised