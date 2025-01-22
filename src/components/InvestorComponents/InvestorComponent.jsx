import React from 'react'
import './InvestorComponents.css'
import PageForm from '../PageForm/PageForm';

function InvestorComponent() {
  return (
    <>
    <main>
      <section class=" commonHro invstHro">
        <div class="container">
          <div class="cmpny-content">
            <h1 data-aos="fade-right" data-aos-duration="1000">
              <span class="commSpn">Shaping the  </span> 
              Future Together
            </h1>   
        </div>

        <div class="commHdImg invBgImg">
        <img src="assets/investors/bgimg.jpg" alt=""/>
        </div>
        </div>
      </section>
      <section class="CA-section">
          <div class="container">
            <div class="pageLink">
              <a href="">Home | Company | <span>Investors</span></a>
            </div>
        </div>
      </section>
      <section class="invstSec">
        <div class="container">
          <div class="invstContain">
            <div class="Content-row">
            <div class="aboutSection" data-aos="fade-right" data-aos-duration="1000">
              <div class="row abtRow">                      
                <div class="abt-content invst-cont col-md-12 col-lg-6">
                  <div>
                    <h3>Contact Investor 
                      Relations</h3>
                    <p>
                      Mr. Hussein Hashi – CPA Treasury and Board Member  <a href="mailto:Invesment@ramadpay.com">Invesment@ramadpay.com</a>
                    </p>
                    </div>
                </div>
                <div class="abtImg col-md-12 col-lg-6">
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