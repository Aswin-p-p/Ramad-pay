import React from 'react'
import './ServiceArea.css'
import PageForm from '../PageForm/PageForm'

function ServiceArea() {
  return (
   <>
    <main>
      <section className=" commonHro">
        <div className="container">
          <div className="cmpny-content">
            <h1 data-aos="fade-right" data-aos-duration="1000">
              Our Service <br/> Area
            </h1>   
        </div>

        <div className="commHdImg srAreaImg">
          <img src="assets/serviceimg/servicebgimg.png" alt=""/>
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
          <div className="tite">
            <h2>
              With Ramad Pay, you're always connected to the best in financial technology, no matter where you are.
            </h2>
            <p>
              Through strategic partnerships, we’re able to enhance our services, expand our reach, and provide even greater value to our customers. Explore our diverse partnerships and alliances that drive our mission forward.
            </p>
          </div>
          
          <div className="mapContBlk">
            <div className="Content-row">
            <div className="aboutSection" data-aos="fade-right" data-aos-duration="1000">
   
              <div className="row abtRow">                      

                <div className="abt-content mapCont col-md-12 col-lg-6">
                  <div>
                    <h3>Heading for service Areas</h3>
                    <ul>
                      <li><a href="/minneapolis">Minneapolis, MN</a></li>
                      <li><a href="/stpaul">St. Paul, MN</a></li>
                      <li><a href="/stcloud">St. Cloud, MN</a></li>
                      <li><a href="/Aurora" >Aurora, CO</a></li>
                      <li><a href="/Columbus">Columbus, OH</a></li>
                      <li><a href="/WashingtonSeattle">Seattle, WA</a></li>
                      <li>
                          <a href="/SanDiego">  San Diego</a>
                      </li>
                    </ul>
                    </div>
                </div>
                <div className="abtImg col-md-12 col-lg-6">
                  <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2823.068521201294!2d-93.23899562341475!3d44.962600666765844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2aefa6fbe65ba7a1%3A0x6dadde93b4fb80be!2sRamad%20Pay!5e0!3m2!1sen!2sin!4v1736854054976!5m2!1sen!2sin" width="100%" height="450" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
   </>
  )
}

export default ServiceArea