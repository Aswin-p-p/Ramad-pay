import React from 'react'
import './P2premittance.css'
import PageForm from '../PageForm/PageForm';
import Countries from '../HomeComponents/Countries/Countries';
import HomePageForm from '../HomePageForm/HomePageForm';
function P2pRemittance() {
  return (
  <>
  <section className="cmpny-hroSection custHero p2p">
        <div className="container">
          <div className="cmpny-content">
            <h1 data-aos="fade-right" data-aos-duration="1000">
                <span className='commSpn'>international</span>
                P2P Global Payments
            </h1>   
        </div>

        <div className="p2pHeadImg">
          <img src="assets/serviceimg/p2pbannerimg.png" alt=""/>
        </div>
        </div>
      </section>
      <section className="CA-section">
          <div className="container">
            <div className="pageLink">
                <a href="">Home | Service <span> | P2P Remittance Services</span></a>
            </div>
        </div>
      </section>

      <Countries />
      {/* <PageForm/> */}
      <HomePageForm/>
  </>
  )
}

export default P2pRemittance