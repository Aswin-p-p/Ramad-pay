import React from 'react'
import './Blogcomponent.css'
import PageForm from '../PageForm/PageForm'

function Blogcomponent() {
  return (
<>
<main>
      <section className=" commonHro blogHro">
        <div className="container">
          <div className="cmpny-contentblg">
            <h1 data-aos="fade-right" data-aos-duration="1000">
             <span className="commSpn"> Insights and Updates on</span> 
              Global Payments <br/> and Remittance
            </h1>   
        </div>

        <div className="commHdImg cmdblog">
          <img src="assets/blog/blogPgImg.png" alt=""/>
        </div>

        </div>
      </section>
      <section className="CA-section">
          <div className="container">
            <div className="pageLink">
              <a href="">Home | <span>Blog/News</span></a>
            </div>
        </div>
      </section>
      <section className="blogSec">
        <div className="container">
          <div className="commSecHead">
            <h2>
              Latest Updates
            </h2>
          </div>
          <div className="row">
            <div className="col-md-4">
             <a href="blog-in.html">
              <div className="blogBlk">
                <div className="blogImg">
                  <img src="assets/blog/blog1.jpg" alt=""/>
                </div>
                <div className="blogDesc">
                  <span className="blgDate">17 Nov 2024</span>
                  <h3>
                    Top 5 Benefits of Using Text2Pay for Your Remittance Needs
                  </h3>
                  <p>
                    In today’s globalized world, sending money across borders has become a necessity for many. Ramad Pay’s Text2Pay service offers a modern solution that simplifies this process.
                  </p>
                </div>
              </div>
             </a>
            </div>
            <div className="col-md-4">
              <a href="">
                <div className="blogBlk">
                  <div className="blogImg">
                    <img src="assets/blog/blog2.jpg" alt=""/>
                  </div>
                  <div className="blogDesc">
                    <span className="blgDate">17 Nov 2024</span>
                    <h3>
                      Step-by-Step Guide: Sending Money Abroad with Text2Pay
                    </h3>
                    <p>
                      Sending money abroad can often be a complex and time-consuming process. With Ramad Pay’s Text2Pay service, this task has become significantly easier.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a href="">
                <div className="blogBlk">
                  <div className="blogImg">
                    <img src="assets/blog/3.jpg" alt=""/>
                  </div>
                  <div className="blogDesc">
                    <span className="blgDate">17 Nov 2024</span>
                    <h3>
                      Security First: How Text2Pay Ensures Safe and Secure Transactions
                    </h3>
                    <p>
                      In the digital age, the security of financial transactions is a paramount concern. 
                    </p>
                  </div>
                </div>
              </a>
              
            </div> 
          </div>
        </div>
      </section>

      <PageForm/>
      


 
    </main>
</>
  )
}

export default Blogcomponent