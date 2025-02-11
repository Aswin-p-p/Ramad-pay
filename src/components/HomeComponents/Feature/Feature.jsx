import React, {useRef} from 'react';
import Slider from 'react-slick';
import './Feature.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Feature() {

    const sliderRef = useRef(null);

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:true,
            arrow:false
          },
        },
      ],
    };
    
  return (
    <>
        <section className="rmdFeatures">
        <div className="container">
          <div className="feature-div">
            <h2 data-aos="fade-down" data-aos-duration="1000">
              Experience the Speed and <br />
              Security of RamadPay Remittance
            </h2>
            <h4 data-aos="fade-in" data-aos-duration="1000">Key Features</h4>
            <p data-aos="fade-in" data-aos-duration="1000">
              Life doesn't wait, and neither should your remittance. With our
              RamadPay Remittance Package, you'll experience the convenience of
              instant transfers, ensuring that your support reaches your loved
              ones when they need it most.
            </p>
          </div>

          <div className="ftrsSliderTrack">
          <button
            className="prev-btn"
            aria-label="Previous Slide"
            onClick={() => sliderRef.current.slickPrev()}>
            <img src="assets/sliderImages/back.png" alt="Previous Slide" />
          </button>
            <Slider ref={sliderRef} {...settings} className="slider-track" data-aos="fade-right" data-aos-duration="1000">
            <div className="rmd-slider">
                <div className="icon instant">
                  <img
                    src="assets/sliderImages/instant.png"
                    alt="Instant Transfers"
                  />
                </div>
                <h4>Instant Transfers</h4>
                <p>
                  Say goodbye to waiting. With our FastTrack Remittance Package,
                  your money will be on its way to your loved ones in an
                  instant. Whether it’s an emergency or a time-sensitive
                  situation, we’ve got you covered.
                </p>
              </div>
              <div className="rmd-slider">
                <div className="icon scnd-img">
                  <img
                    src="assets/sliderImages/global.png"
                    alt="Global Reach"
                  />
                </div>
                <h4>Global Reach</h4>
                <p>
                We understand that distances shouldn’t limit your ability
                 to support those you care about. Our FastTrack Remittance
                 Package covers a wide range of countries, ensuring that your money can reach across borders effortlessly.
                </p>
              </div>
              <div className="rmd-slider">
                <div className="icon scnd-img">
                  <img
                    src="assets/sliderImages/rates.png"
                    alt="Competitive Exchange Rates"
                  />
                </div>
                <h4>
                  Competitive <br />
                  Exchange Rates
                </h4>
                <p>
                  We believe in transparency and value for your money, offering
                  competitive exchange rates to make your remittance go further.
                </p>
              </div>
              {/* <div className="rmd-slider">
                <div className="icon">
                  <img
                    src="assets/sliderImages/instant.png"
                    alt="Competitive Exchange Rates"
                  />
                </div>
                <h4>Competitive Exchange Rates</h4>
                <p>
                  We believe in transparency and value for your money, offering
                  competitive exchange rates to make your remittance go further.
                </p>
              </div> */}
              <div className="rmd-slider">
                <div className="icon">
                  <img
                    src="assets/sliderImages/streamline.png"
                    alt="Competitive Exchange Rates"
                  />
                </div>
                <h4>Streamlined Process</h4>
                <p>
                Sending money shouldn’t be complicated. With our user-friendly
                 online platform and 
                mobile app, you can initiate a remittance within minutes.
                 It’s as simple as a few clicks.
                </p>
              </div>
              <div className="rmd-slider">
                <div className="icon">
                  <img
                    src="assets/sliderImages/customer.png"
                    alt="steamline  Rates"
                  />
                </div>
                <h4>24/7 Customer Support</h4>
                <p>
                We’re here for you around the clock. Our dedicated customer
                 support team is available 24/7 to address 
                 your queries and provide assistance whenever you need it.
                </p>
              </div>
            </Slider>
            <button
            className="next-btn"
            aria-label="Next Slide"
            onClick={() => sliderRef.current.slickNext()}>
            <img src="assets/sliderImages/next.png" alt="Next Slide" />
          </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Feature