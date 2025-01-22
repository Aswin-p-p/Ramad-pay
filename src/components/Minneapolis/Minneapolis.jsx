import React, { useRef } from "react";
import './minneapolis.css'
import Countries from '../HomeComponents/Countries/Countries'
import PageForm from '../PageForm/PageForm'

function Minneapolis() {
  const dateInputRef = useRef(null);

  const handleOpenCalendar = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
    }
  };

  return (
    <>

      <main>
      <section className="commonHro serviceInAreaHero">
            <div className="container">
                <div className="cmpny-content cmpny-minne">
                    <h1 data-aos="fade-right" data-aos-duration="1000">
                        <span className="commSpn">Minneapolis'</span>
                        Gateway to Global <br/>
                        Financial Connectivity
                    </h1>
                </div>
                <div className="commHdImg srAreaInImg">
                    <img src="assets/serviceArea/bgimg.png" alt=""/>
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
        <section className="rmdPartner rmdServiceArea">
            <div className="container">
                <div className="rmserArIn">
                    <div className="tite">
                        <h2>
                            Linking Minneapolis to Global
                            Opportunities with Ease
                        </h2>
                        <p>
                            Minneapolis’ Financial Hub: Your Gateway to the World. Save More, Stress Less.
                        </p>
                    </div>
                    <div className="serInBtn">
                        <div>
                            <a href="">Learn More</a>
                        </div>
                        <div>
                            <a href="">
                                Find an agent near you
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="serviceAreaInCont">
                <div className="container">
                    <div className="Content-row">
                        <div className="aboutSection" data-aos="fade-right" data-aos-duration="1000">
                            <div className="row abtRow">
                                <div className="SerMinn serArInCont col-md-12 col-lg-6">
                                    <div>
                                        <h3>Navigating the Financial Landscape 
                                            of Minneapolis</h3>
                                            <p>
                                                In the bustling heart of Minneapolis, our financial services are revolutionizing how money moves. Ramad Pay brings the world closer to your doorstep, offering a suite of services tailored to the dynamic needs of Minneapolis residents. From seamless P2P remittances, empowering NGOs with efficient fund transfers, to facilitating cutting-edge B2B digital payment solutions, our focus is on making global financial transactions effortless and secure. Whether you’re an individual sending money to loved ones, a business expanding its horizons, or a nonprofit supporting vital causes, our solutions are designed to enhance your financial operations, ensuring that Minneapolis stays connected to the global financial network with confidence and ease.
                                            </p>
                                    </div>
                                </div>
                                <div className="abtImg col-md-12 col-lg-6">
                                    <div className="rmd-col">
                                        <form className="pay-frm">
                                            <div className="input-box">
                                              <label>Amount</label>
                                              <input type="number" />
                                            </div>
                                            <div className="input-box">
                                              <label>From</label>
                                              <select name="currency" id="currency">
                                                <option value="usd">USD - United States Dollar</option>
                                                <option value="CAD">CAD - Canadian Dollar</option>
                                                <option value="JPY">JPY - Japanese Yen</option>
                                                <option value="KES">KES - Kenyan Shilling</option>
                                              </select>
                                            </div>
                                            <div className="input-box">
                                              <label>To</label>
                                              <select name="currency" id="currency">
                                                <option value="usd">USD - United States Dollar</option>
                                                <option value="CAD">CAD - Canadian Dollar</option>
                                                <option value="JPY">JPY - Japanese Yen</option>
                                                <option value="KES">KES - Kenyan Shilling</option>
                                              </select>
                                            </div>
                                            <div className="amount">
                                              <h2>129.26 Ksh</h2>
                                            </div>
                                            <div className="rmd-currency">
                                              <div className="rmdCrncy">
                                                <img src="assets/serviceArea/currency.png" alt="" />
                                                <p>USD/KES <br />Currency.Wiki</p>
                                              </div>
                                                <div className="custom-date-picker">
                                                  <input type="date" id="date-input" ref={dateInputRef} />
                                                  <span className="calendar-icon" id="open-calendar" onClick={handleOpenCalendar}>
                                                    <img src="assets/serviceArea/calender.png" alt="Calendar Icon" />
                                                  </span>
                                                </div>
                                            </div>
                                          </form>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="desclaimer">
                        *Converter uses mid-market sell rate settlement. Information only. Sending money won’t get this rate. <br/> Please check our mobile app for an updated rate.
                    </p>
                </div>
            </div>
        </section>





        <section className="serviceAreaInFeat">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="saIFeatBlk">
                            <div className="saiIco">
                                <img src="assets/serviceArea/p2p.png" alt=""/>
                            </div>
                            <div className="saiCont">
                                <h3>P2P Remittance 
                                    Services</h3>
                                    <p>
                                        Minneapolis to Anywhere: Send Money with Speed and Security
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="saIFeatBlk">
                            <div className="saiIco">
                                <img src="assets/serviceArea/support.png" alt=""/>
                            </div>
                            <div className="saiCont">
                                <h3>Support for
                                    NGOs</h3>
                                    <p>
                                        Empower Minneapolis NGOs: Facilitating Global Aid with Precision
                                    </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="saIFeatBlk">
                            <div className="saiIco">
                                <img src="assets/serviceArea/b2b.png" alt=""/>
                            </div>
                            <div className="saiCont">
                                <h3>Digital Payments
                                    for B2B</h3>
                                    <p>
                                        Minneapolis Businesses Thrive with Our Digital Payment Solutions    
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="saIFeatBlk">
                            <div className="saiIco">
                                <img src="assets/serviceArea/customized.png" alt=""/>
                            </div>
                            <div className="saiCont">
                                <h3>Customized 
                                    Ramad Pay App</h3>
                                    <p>
                                        Minneapolis Goes Digital: Your Banking Experience, Redefined
                                    </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="saIFeatBlk">
                            <div className="saiIco">
                                <img src="assets/serviceArea/payment.png" alt=""/>
                            </div>
                            <div className="saiCont">
                                <h3>Global Payments 
                                    Agency</h3>
                                    <p>
                                        Expand Your Minneapolis Business Globally with Our Payment Expertise
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Countries/>

        <PageForm/>
      </main>
    </>
  )
}

export default Minneapolis