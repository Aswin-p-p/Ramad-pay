import React, { useRef } from "react";
import '../Minneapolis/minneapolis.css'
import Countries from '../HomeComponents/Countries/Countries'
import PageForm from '../PageForm/PageForm'
function Aurora() {
    const dateInputRef = useRef(null);

    const handleOpenCalendar = () => {
        if (dateInputRef.current) {
            dateInputRef.current.showPicker();
        }
    };

    const handleSmoothScroll = (e) => {
        e.preventDefault(); // Prevent default anchor behavior

        const pageFormSection = document.getElementById('pageFormSection');
        if (pageFormSection) {
            pageFormSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll effect
        }
    };
    return (
        <>
            <main>
                <section className="commonHro serviceInAreaHero">
                    <div className="container">
                        <div className="cmpny-content cmpny-minne">
                            <h1 data-aos="fade-right" data-aos-duration="1000">
                                <span className="commSpn">Aurora's</span>
                                Avenue to Global <br />
                                Financial Synergy
                            </h1>
                        </div>
                        <div className="commHdImg srAreaInImg stpaulimg">
                            <img src="assets/serviceArea/bgimg.png" alt="" />
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
                                    Crafting Financial Bridges from Aurora to the World
                                </h2>
                                <p>
                                    Aurora’s Financial Frontier: Simplifying Your Global Transactions.
                                </p>
                            </div>
                            <div className="serInBtn">
                                <div>
                                    <a href="" onClick={handleSmoothScroll}>Learn More</a>
                                </div>
                                <div>
                                    <a href="/find-Agent">
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
                                                <h3>Unleashing Aurora's Financial Potential</h3>
                                                <p>
                                                    Aurora, Colorado, now stands at the crossroads of financial innovation and global connectivity, thanks to Ramad Pay’s comprehensive suite of services. We’re transforming the way Aurora engages with the world financially. Our P2P remittance services provide a fast, secure, and cost-effective way to send money internationally, perfect for supporting loved ones or managing personal finances. Businesses in Aurora can take advantage of our advanced B2B digital payment systems, designed to facilitate smooth international transactions. For NGOs, our dedicated financial assistance programs amplify their humanitarian efforts. The Customized Ramad Pay App represents the zenith of digital banking, combining convenience with security. Aurora’s diverse financial needs are met with Ramad Pay, connecting the city to the global economic landscape with ease and reliability.
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
                                *Converter uses mid-market sell rate settlement. Information only. Sending money won’t get this rate. <br /> Please check our mobile app for an updated rate.
                            </p>
                        </div>
                    </div>
                </section>





                <section className="serviceAreaInFeat" id="pageFormSection">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">

                                <div className="saIFeatBlk">
                                    <a href="/p2premittance">
                                        <div className="saiIco">
                                            <img src="assets/serviceArea/p2p.png" alt="" />
                                        </div>

                                        <div className="saiCont">

                                            <h3>P2P Remittance
                                                Services</h3>
                                            <p>
                                                Connecting Aurora to the World with Swift Money Transfers
                                            </p>



                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="saIFeatBlk">
                                    <a href="/ngo">
                                        <div className="saiIco">
                                            <img src="assets/serviceArea/support.png" alt="" />
                                        </div>

                                        <div className="saiCont">

                                            <h3>Support for
                                                NGOs</h3>
                                            <p>
                                                Strengthening Aurora’s NGOs with Streamlined Financial Tools                                  </p>

                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="saIFeatBlk">
                                    <a href="/b2b">
                                        <div className="saiIco">
                                            <img src="assets/serviceArea/b2b.png" alt="" />
                                        </div>

                                        <div className="saiCont">

                                            <h3>Digital Payments
                                                for B2B</h3>
                                            <p>

                                                Aurora’s Business World: Embracing Digital Payment Technologies
                                            </p>

                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="saIFeatBlk">
                                    <a href="/customised">
                                        <div className="saiIco">
                                            <img src="assets/serviceArea/customized.png" alt="" />
                                        </div>

                                        <div className="saiCont">

                                            <h3>Customized
                                                Ramad Pay App</h3>
                                            <p>
                                                Aurora: Experience the Future of Banking Today                                  </p>

                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="saIFeatBlk">
                                    <a href="/globalpayment">
                                        <div className="saiIco">
                                            <img src="assets/serviceArea/payment.png" alt="" />
                                        </div>

                                        <div className="saiCont">

                                            <h3>Global Payments
                                                Agency</h3>
                                            <p>
                                                Expand Your Aurora Business’s Global Footprint with Our Solutions                 </p>

                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Countries />

                <PageForm />
            </main>
        </>
    )
}

export default Aurora