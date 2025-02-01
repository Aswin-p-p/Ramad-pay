import React, { useRef } from "react";
import '../Minneapolis/minneapolis.css'
import Countries from '../HomeComponents/Countries/Countries'
import PageForm from '../PageForm/PageForm'
function StCloud() {
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
                        <span className="commSpn">St. Cloud's</span>
                        Link to Global <br/>
                        Financial Empowerment
                    </h1>
                </div>
                <div className="commHdImg srAreaInImg stpaulimg">
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
                        Connecting St. Cloud to the World with Financial Ease
                        </h2>
                        <p>
                        St. Cloud’s Answer to Worldwide Money Movement: Simple, Swift, Secure.
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
                                <div className="abt-content serArInCont col-md-12 col-lg-6">
                                    <div>
                                        <h3>Financial Innovation Starts in St. Cloud</h3>
                                            <p>
                                            St. Cloud’s vibrant community now has the world at its fingertips, thanks to Ramad Pay’s diverse financial services. Catering to both individuals and businesses, we offer solutions that transform the way you engage with the global economy. Our services range from seamless P2P remittances, enabling personal connections across borders, to sophisticated B2B digital payment platforms designed for St. Cloud’s dynamic business environment. NGOs in St. Cloud benefit from our efficient financial tools, ensuring their efforts have a broader impact. With our Customized Ramad Pay App, experience the future of banking today, combining security with convenience. Ramad Pay is dedicated to making St. Cloud a hub of financial innovation and connectivity.                                            </p>
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
                                    Your St. Cloud Gateway for Fast International Money Transfers
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
                                    Enhancing St. Cloud’s NGO Impact with Streamlined Financial Solutions                                    </p>
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
                                    Digital Payment Mastery for St. Cloud Businesses                                    </p>
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
                                    St. Cloud Goes Digital: The Future of Banking is Here                                    </p>
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
                                    St. Cloud Businesses: Expand Your Reach with Global Payment Solutions                                    </p>
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

export default StCloud