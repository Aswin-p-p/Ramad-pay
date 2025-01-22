import React from 'react'
import './P2premittance.css'
import PageForm from '../PageForm/PageForm';
import Countries from '../HomeComponents/Countries/Countries';
function P2pRemittance() {
  return (
  <>
  <section class="cmpny-hroSection custHero p2p">
        <div class="container">
          <div class="cmpny-content">
            <h1 data-aos="fade-right" data-aos-duration="1000">
                <span className='commSpn'>international</span>
                P2P Global Payment
            </h1>   
        </div>

        <div class="p2pHeadImg">
          <img src="assets/serviceimg/p2p.png" alt=""/>
        </div>
        </div>
      </section>
      <section class="CA-section">
          <div class="container">
            <div class="pageLink">
                <a href="">Home | Service <span> | P2P Remittance Services</span></a>
            </div>
        </div>
      </section>

      <Countries />
      <PageForm/>
  </>
  )
}

export default P2pRemittance