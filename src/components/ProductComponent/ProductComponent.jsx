import React from 'react'
import './ProductComponent.css'
import PageForm from '../PageForm/PageForm'

function ProductComponent() {
  return (
   <>
   <main>
   <section className="cmpny-hroSection custHero cmpnyproduct ">
        <div className="container">
          <div className="cmpny-content cmnyproductcont">
          <span className="commSpn" > RamadPay</span>
            <h1 data-aos="fade-right" data-aos-duration="1000">
            
              Remittance Package
            </h1>   
            <p data-aos="fade-right" data-aos-duration="1000">We’re committed to providing hassle-free, secure, and lightning-fast remittance services.
              </p>  
              <p>Our Ramad Pay Remittance Package is designed to meet your urgent money transfer needs, ensuring your funds reach their destination swiftly and reliably.</p>
            
            <div className="readmore-btn" data-aos="fade-right" data-aos-duration="1000"><a href="">Read More</a></div>
        </div>

        <div className="prdHedImg prdHrImg">
          <img src="assets/product/holdingphone-latest.png" alt=""/>
        </div>
        </div>
      </section>
      <section className="CA-section">
          <div className="container">
            <div className="pageLink">
              <a href="">Home | <span>Product</span></a>
            </div>
        </div>
      </section>

      <section className="rmdProduct">
        <div className="container">
          <div className="commSecHead">
            <h2>
              Global remittance, <br/>
                at the touch of a button
            </h2>
            <p>
              Remittance enables migrants to send money abroad to support their families. Ramad Pay is committed to fair and transparent fees, using fintech to reduce costs and provide customers with fast transfers. We believe affordable remittance is a positive force.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="prBlk">
                <div className="prIco">
                  <img src="assets/product/remit.png" alt=""/>
                </div>
                <div className="prCont">
                  <h3>FX Calculator</h3>
                  <p>Instantly estimate fees and exchange rates. Make informed decisions and send money smartly with our Remittance Calculator.</p>
                </div>
                <div className="prBtn">
                  <a href="">FX Calculator</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="prBlk">
                <div className="prIco">
                  <img src="assets/product/remit.png" alt=""/>
                </div>
                <div className="prCont">
                  <h3>Become An Agent</h3>
                  <p>Expand your business horizon. Join Ramad Pay as an agent and grow with us. Let’s prosper together!</p>
                </div>
                <div className="prBtn">
                  <a href="">Become an agent</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="prBlk">
                <div className="prIco">
                  <img src="assets/product/remit.png" alt=""/>
                </div>
                <div className="prCont">
                  <h3>Risk & compliance</h3>
                  <p>Your security is our priority. At Ramad Pay, we ensure strict adherence to global risk and compliance standards.</p>
                </div>
                <div className="prBtn">
                  <a href="">Risk & Compliance</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageForm/>
   </main>
   </>
  )
}

export default ProductComponent