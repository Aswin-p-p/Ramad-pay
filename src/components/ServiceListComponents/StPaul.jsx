import React from 'react';
import '../Minneapolis/minneapolis.css'
import Countries from '../HomeComponents/Countries/Countries'
import PageForm from '../PageForm/PageForm'
import CurrencyConverter from '../Minneapolis/CurrencyConverter'
import HomePageForm from '../HomePageForm/HomePageForm';

function StPaul() {
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
                        <span className="commSpn">St. Paul:</span>
                        Bridging Financial Gaps <br/>
                        with Global Solutions
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
                        Your St. Paul Partner for Worldwide Financial Empowerment
                        </h2>
                        <p>
                        In St. Paul, Every Penny Counts. Global Transfers Made Economical.
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
                                        <h3>Redefining St. Paul's Financial Horizons</h3>
                                            <p>
                                            St. Paul stands at the forefront of financial innovation with Ramad Pay’s comprehensive services. We’re redefining the way money is managed and transferred, ensuring every transaction is a step towards global connectivity. Our services, from user-friendly P2P remittance to robust B2B digital payment solutions, are tailored to fit the unique financial landscape of St. Paul. We empower NGOs with efficient financial tools to make a bigger impact, and with our Customized Ramad Pay App, individuals enjoy a seamless digital banking experience. At the heart of our services is the drive to connect St. Paul to the global financial network, providing secure, swift, and cost-effective solutions for all your financial needs.
                                            </p>
                                    </div>
                                </div>
                                <div className="abtImg col-md-12 col-lg-6">
                                    <div className="rmd-col">
                                    <CurrencyConverter/>
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





        <section className="serviceAreaInFeat" id="pageFormSection">
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
                                    St. Paul’s Fast Track to Worldwide Money Transfers
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
                                    Empowering St. Paul NGOs with Effective Financial Tools
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
                                    Revolutionize Your St. Paul Business with Digital Payment Innovations  
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
                                    St. Paul’s Choice for a Smarter Banking Experience
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
                                    Elevating St. Paul Businesses in the Global Payment Arena
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Countries/>

        {/* <PageForm/> */}
        <HomePageForm/>
      </main>
    </>
  )
}

export default StPaul