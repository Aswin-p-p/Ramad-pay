import React from 'react'
import './InvestorComponents.css'
import PageForm from '../PageForm/PageForm';

function InvestorComponent() {
  return (
    <>
    <main>
      <section className=" commonHro invstHro">
        <div className="container">
          <div className="cmpny-content">
            <h1 data-aos="fade-right" data-aos-duration="1000">
              <span className="commSpn">Shaping the  </span> 
              Future Together
            </h1>   
        </div>

        <div className="commHdImg invBgImg">
        <img src="assets/investors/bgimg.jpg" alt=""/>
        </div>
        </div>
      </section>
      <section className="CA-section">
          <div className="container">
            <div className="pageLink">
              <a href="">Home | Company | <span>Investors</span></a>
            </div>
        </div>
      </section>
      <section className="invstSec">
        <div className="container">
          <div className="invstContain">
            <div className="Content-row">
            <div className="aboutSection" data-aos="fade-right" data-aos-duration="1000">
              <div className="row abtRow">                      
                <div className="abt-content invst-cont col-md-12 col-lg-6">
                  <div>
                    <h3>Contact Investor 
                      Relations</h3>
                    <p>
                      Mr. Hussein Hashi – CPA Treasury and Board Member  <a href="mailto:Invesment@ramadpay.com">Invesment@ramadpay.com</a>
                    </p>
                    </div>
                </div>
                <div className="abtImg col-md-12 col-lg-6">
                  <img src="assets/investors/map.jpg" alt=""/>
                </div>
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

export default InvestorComponent