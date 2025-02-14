import React from 'react'
import './Partnership.css'
import PageForm from '../PageForm/PageForm'
import HomePageForm from '../HomePageForm/HomePageForm'

function Partnership() {
  return (
  <>
     
     <main>
      <section className="commonHro prtnHro">
        <div className="container">
          <div className="cmpny-content cmpny-contentwidth prtCmpCont">
            <h1 data-aos="fade-right" data-aos-duration="1000">
             <span className="commSpn">Ramad Pay's </span> 
             Global Cross Border  <br/> Payment Strategy

            </h1>   
        </div>

        <div className="commHdImg prtnHdImg" data-aos="fade" data-aos-duration="1000">
          <img src="assets/partnership/partner-bnr.png" alt=""/>
        </div>
        </div>
      </section>
      <section className="CA-section">
          <div className="container">
            <div className="pageLink">
              <a href="">Home | Company | <span>Partnership</span></a>
            </div>
        </div>
      </section>
      <section className="rmdPartner">
        <div className="container">
          <div className="tite">
            <p>
              Through strategic partnerships, we’re able to enhance our services, expand our reach, and provide even greater value to our customers. Explore our diverse partnerships and alliances that drive our mission forward.
            </p>
          </div>
          <div className="PrtnContain">
            <div className="row">
              <div className="col-md-6">
                <div className="prtnBlk">
                  <div className="prtnIco">
                    <img src="assets/partnership/partner.png" alt=""/>
                  </div>
                  <div className="prtnDesc">
                    <h3>Our Partner Ecosystem</h3>
                    <p>
                      Ramad Pay has built a diverse partner ecosystem to advance our mission of providing fast, low-cost cross-border payments globally. We leverage partnerships with global remittance aggregators, mobile money operators, e-commerce platforms, fintech innovators, and NGOs. These collaborations maximize our reach, capabilities, and impact across sectors.
  
                    </p>
                    <p>
                      Our platform makes it easy for partners to integrate and innovate with us. This partner ecosystem strategy expands our services and merchant network to achieve our vision of delivering financial services to underserved communities worldwide. We’ll continue expanding partnerships to solve global payment challenges.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="prtnBlk">
                  <div className="prtnIco">
                    <img src="assets/partnership/financial.png" alt=""/>
                  </div>
                  <div className="prtnDesc">
                    <h3>Financial Institutions </h3>
                    <p>
                      As a licensed financial institution, we adhere to laws and regulations in each country we operate in, ensuring customer and partner trust. We have authorization from US financial authorities to provide domestic and cross-border money transfers and e-wallet services.
  
                    </p>
                    <p>
                      We are registered as a Money Services Business (MSB) with FinCEN and hold money transmitter licenses in 15 states and growing. By maintaining capital reserves, implementing robust compliance procedures, and undergoing regular audits and reporting, we remain in good standing with regulators.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="prtnBlk">
                  <div className="prtnIco">
                    <img src="assets/partnership/global.png" alt=""/>
                  </div>
                  <div className="prtnDesc">
                    <h3>Global Payment Aggregators</h3>
                    <p>
                    Partnerships with leading global payment aggregators enable us to expand our cross border reach by connecting to platforms with millions of users worldwide. This allows our customers to instantly send funds to recipients with accounts on these services across 200+ markets.  
                    </p>
                    <p>
                    Account holders can also cash out to our e-wallet or bank accounts in 90+ countries. Merchants accepting these networks can easily enable our service for cross-border payments. Interoperability improves convenience and access for end users by enabling seamless movement of money between different payment ecosystems, benefitting all parties.                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="prtnBlk">
                  <div className="prtnIco">
                    <img src="assets/partnership/innovation.png" alt=""/>
                  </div>
                  <div className="prtnDesc">
                    <h3>Fintech Innovations</h3>
                    <p>
                      Fintech innovations in domestic and cross border payments are driving powerful advancements, which is why fostering partnerships with progressive fintech startups is core to our strategy. Collaborating with agile innovators like iPay, MPESA, MTN, and Airtel allows us to rapidly enhance services across payment rails.
                    </p>
                    <p>
                      Bringing financial services to unbanked communities via nonprofits merges their community engagement with our technical and financial expertise in payments. These partnerships align with UN Sustainable Development Goals, ultimately driving shared prosperity by democratizing access to Financial Inclusion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* <PageForm/> */}
      <HomePageForm/>

    </main>
  </>
  )
}

export default Partnership