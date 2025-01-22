import React from 'react'
import './AboutComponent.css'
import PageForm from '../PageForm/PageForm'

function AboutComponent() {
  return (
    <>
     <main>
      <section className="abt-hroSection cmpny-hroSection ">
        <div className="container">
    
          <div className="abtSub-content">
            <h1 data-aos="fade-up" data-aos-duration="1000">
            <span className="commSpn">
              Driving Growth for
            </span>
              Diverse Businesses
            </h1>          
        </div>
        <div className="commHdImg abtnHdImg">
          <img src="assets/aboutSubImages/AB-banner.png" alt=""/>
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
      <section className="abt-section">
          <div className="container" data-aos="fade-in" data-aos-duration="1000">
            <p>Ramad Pay Inc, formerly known as Kaah Express F.S. Inc., was incorporated in 2001 in Minneapolis, Minnesota as a Money Service Business (MSB). Since its founding, the company has evolved and expanded its services from the state of Minnesota to over 16 US states including California and Texas.</p>

             <p> Ramad Pay provides international money transfer services to US immigrants who want to send money to their loved ones in over 120 countries.</p>
              
              <p>The company has over 80 agents throughout the United States and payout partners in 120 countries. Since 2001, Ramad Pay has processed over 30 million transactions totaling over $2 billion USD. In 2023, under new leadership, the company changed its name to Ramad Pay Inc. With new management and technology, Ramad Pay is rapidly expanding into many untapped remittance corridors.</p>
          </div>
      </section>


      <section className="founders-sec">
          <div className="container">
              <div className="row ">
                <div className="col-md-4" data-aos="fade-right" data-aos-duration="1000">
                  <div className="foundersImg ">
                    <img src="assets/aboutSubImages/CEO.jpg" alt=""/>
                  </div>
                  <div className="name">
                    <h3>Aden Hassan - CEO</h3>
                    <div className="linkedin"><a href=""><i className="fa-brands fa-linkedin-in"></i></a> </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="foundersImg " data-aos="fade-up" data-aos-duration="1000">
                    <img src="assets/aboutSubImages/CTO.jpg" alt=""/>
                  </div>
                  <div className="name">
                    <h3>Ali Mohammed - CTO</h3>
                    <div className="linkedin"><a href=""><i className="fa-brands fa-linkedin-in"></i></a> </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="foundersImg " data-aos="fade-left" data-aos-duration="1000">
                    <img src="assets/aboutSubImages/CPA.jpg" alt=""/>
                  </div>
                  <div className="name">
                    <h3>Hussein D. Hashi - CPA</h3>
                    <div className="linkedin"><a href=""><i className="fa-brands fa-linkedin-in"></i></a> </div>
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

export default AboutComponent