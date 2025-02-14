import React from 'react'
import './FindAgent.css'
import PageForm from '../PageForm/PageForm'
import HomePageForm from '../HomePageForm/HomePageForm'

function FindAgent() {
  return (

    <main>
    <section className=" commonHro">
    <div className="container">
      <div className="cmpny-content">
        <div className="commSpn">  Find A Ramad Pay</div>
        <h1 data-aos="fade-right" data-aos-duration="1000">
        Agent Near You
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
          <a href="">Home |<span>Find an agent</span></a>
        </div>
    </div>
  </section>

  <section  >
        <div style={{paddingBottom:"40px", paddingLeft:"30px", paddingRight:"30px"}}>
        <iframe
      src="https://locatestore.com/y-xC3A"
      style={{ border: "none", width: "100%", height: "600px" }}
      allow="geolocation"
      title="Store Locator"/>
        </div>
       </section>

       {/* <PageForm/> */}
       <HomePageForm/>

  </main>
  )
}

export default FindAgent