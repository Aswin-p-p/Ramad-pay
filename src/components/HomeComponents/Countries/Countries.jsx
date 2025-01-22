import React, { useState } from "react";

import './Countries.css'

function Countries() {
  const [activeTab, setActiveTab] = useState(0); // State to track the active tab

  const handleTabClick = (index) => {
    if (activeTab === index) {
      setActiveTab(null); // Deselect the active tab if the same tab is clicked
      setHoveredCountry(null); // Reset hovered country to close open boxes
    } else {
      setActiveTab(index); // Activate the clicked tab
      setHoveredCountry(null); // Reset hovered country to close open boxes
    }
  };
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const countries = [
    {
      name: 'Benin',
      flag: 'assets/CountryFlag/benin.jpg',
      hoverData: {
        payoutType: 'Wallets; Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }
    },
    {
      name: 'Burkina Faso', flag: 'assets/CountryFlag/burkina.jpg', hoverData: {
        payoutType: 'Wallets2; Banks',
        coverage: 'All Banks2',
        businessType: 'P2P2',
      }
    },
    {
      name: 'Burundi', flag: 'assets/CountryFlag/burundi.jpg',
      hoverData: {
        payoutType: 'Wallets; Banks3',
        coverage: 'All Banks3',
        businessType: 'P2P3',
      }
    },
    {
      name: 'Cameroon', flag: 'assets/CountryFlag/cameroon.jpg',
      hoverData: {
        payoutType: 'Wallets; Banks4',
        coverage: 'All Banks4',
        businessType: 'P2P4',
      }
    },
    {
      name: 'C.A Republic', flag: 'assets/CountryFlag/CA.jpg',
      hoverData: {
        payoutType: 'Wallets; Banks5',
        coverage: 'All Banks5',
        businessType: 'P2P5',
      }
    },
    {
      name: 'Chad', flag: 'assets/CountryFlag/benin.jpg',
      hoverData: {
        payoutType: 'Wallets; Banks6',
        coverage: 'All Banks6',
        businessType: 'P2P6',
      }
    },
    {
      name: 'DRC', flag: 'assets/CountryFlag/burkina.jpg',
      hoverData: {
        payoutType: 'Wallets; Banks7',
        coverage: 'All Banks7',
        businessType: 'P2P7',
      }
    },
    {
      name: 'Egypt', flag: 'assets/CountryFlag/burundi.jpg',
      hoverData: {
        payoutType: 'Wallets; Banks8',
        coverage: 'All Banks8',
        businessType: 'P2P8',
      }
    },
    {
      name: 'Ethopia', flag: 'assets/CountryFlag/cameroon.jpg',
      hoverData: {
        payoutType: 'Wallets; Banks9',
        coverage: 'All Banks9',
        businessType: 'P2P9',
      }
    },
    {
      name: 'Gabon', flag: 'assets/CountryFlag/CA.jpg',
      hoverData: {
        payoutType: 'Wallets; Banks10',
        coverage: 'All Banks10',
        businessType: 'P2P10',
      }
    },
    { name: 'Guinea Bissau', flag: 'assets/CountryFlag/benin.jpg' },
    { name: 'Guinea Conakry', flag: 'assets/CountryFlag/burkina.jpg' },
    { name: 'Ivory Coast', flag: 'assets/CountryFlag/burundi.jpg' },
    { name: 'Kenya', flag: 'assets/CountryFlag/cameroon.jpg' },
    { name: 'Malawi', flag: 'assets/CountryFlag/CA.jpg' },
  ];

  const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  return (
    <div>
      <section className="rmd-countries">
        <div className="container">
          <div className="head">
            <h2 data-aos="fade-down" data-aos-duration="1000">Empowering Lives in These Countries</h2>
            <h4 data-aos="fade-in" data-aos-duration="1000">Regions Where We Operate</h4>
          </div>
          <div className="tabSection countryWeb" data-aos="fade-in" data-aos-duration="1000">
            <div className="tab-contain">
              <div className="tabs">
                <button
                  className={`tab ${activeTab === 0 ? 'active' : ''}`}
                  onClick={() => handleTabClick(0)}
                >
                  Africa
                </button>
                <button
                  className={`tab ${activeTab === 1 ? 'active' : ''}`}
                  onClick={() => handleTabClick(1)}
                >
                  Americas
                </button>
                <button
                  className={`tab ${activeTab === 2 ? 'active' : ''}`}
                  onClick={() => handleTabClick(2)}
                >
                  APAC
                </button>
                <button
                  className={`tab ${activeTab === 3 ? 'active' : ''}`}
                  onClick={() => handleTabClick(3)}
                >
                  Europe
                </button>
                <button
                  className={`tab ${activeTab === 4 ? 'active' : ''}`}
                  onClick={() => handleTabClick(4)}
                >
                  GCC
                </button>
              </div>
              <div className="content">
                <div className={`tab-content ${activeTab === 0 ? 'activeContent' : ''}`}>
                  {chunkArray(countries, 5).map((countryChunk, chunkIndex) => (
                    <div className="countries-list" key={chunkIndex}>
                      {countryChunk.map((country, index) => (
                        <div
                          className="listing"
                          key={index}
                          onMouseEnter={() => setHoveredCountry(country.name)}
                          onMouseLeave={() => setHoveredCountry(null)}
                        >
                          <div className="rmd-country">
                            <div className="flag-img">
                              <img src={country.flag} alt={country.name} />
                            </div>
                            <div><p>{country.name}</p></div>
                          </div>

                          {/* Show hover content only for hovered country */}
                          {hoveredCountry === country.name && country.hoverData && (
                            <div   className="tabList-hover">
                              <div className="payment">
                                <div><img src="assets/CountryFlag/hoverimage/wallet.png" alt="Wallet" /></div>
                                <div><p>Payout type:</p><p className="bld-txt">{country.hoverData.payoutType}</p></div>
                              </div>
                              <div className="payment">
                                <div><img src="assets/CountryFlag/hoverimage/allBanks.png" alt="All Banks" /></div>
                                <div><p>Coverage:</p><p className="bld-txt">{country.hoverData.coverage}</p></div>
                              </div>
                              <div className="payment">
                                <div><img src="assets/CountryFlag/hoverimage/bag.png" alt="Business" /></div>
                                <div><p>Business type:</p><p className="bld-txt">{country.hoverData.businessType}</p></div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>


                <div className={`tab-content ${activeTab === 1 ? 'activeContent' : ''}`}>

                </div>
                <div className={`tab-content ${activeTab === 2 ? 'activeContent' : ''}`}>
                  <p></p>
                </div>
              </div>
            </div>
          </div>

          {/* <!--country list mobile screen slider --> */}
          <div className="tabSection countryLst-mob">
      <div className="countryList">
        <div className="MobList">
       
            <button   className={`tab ${activeTab === 0 ? 'active' : ''}`}
                  onClick={() => handleTabClick(0)}>
              Africa
            </button>
            {activeTab === 0 && (
            <div className="subList" style={{ display: "block" }}>
              {countries.map((country, index) => (
                <div
                  className="listing"
                  key={index}
                  onMouseEnter={() => setHoveredCountry(country.name)}
                  onMouseLeave={() => setHoveredCountry(null)}
                >
                  <div className="rmd-country">
                    <div className="flag-img">
                      <img src={country.flag} alt={country.name} />
                    </div>
                    <div>
                      <p>{country.name}</p>
                    </div>
                  </div>
                  {hoveredCountry === country.name && country.hoverData && (
                    <div className="tabList-hover" >
                      <div className="payment">
                        <div>
                          <img
                            src="assets/CountryFlag/hoverimage/wallet.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <p>Payout type:</p>
                          <p className="bld-txt">{country.hoverData.payoutType}</p>
                        </div>
                      </div>
                      <div className="payment">
                        <div>
                          <img
                            src="assets/CountryFlag/hoverimage/allBanks.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <p>Coverage:</p>
                          <p className="bld-txt">{country.hoverData.coverage}</p>
                        </div>
                      </div>
                      <div className="payment">
                        <div>
                          <img
                            src="assets/CountryFlag/hoverimage/bag.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <p>Business type:</p>
                          <p className="bld-txt">{country.hoverData.businessType}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
              )}
         

              <button
                  className={`tab ${activeTab === 1 ? 'active' : ''}`}
                  onClick={() => handleTabClick(1)}
                >
                  Americas
                </button>
                {activeTab === 1 && (
            <div className="subList" style={{ display: "block" }}>
              <p>Americas content goes here...</p>
            </div>
          )}
               <button
                  className={`tab ${activeTab === 2 ? 'active' : ''}`}
                  onClick={() => handleTabClick(2)}
                >
                  APAC
                </button>

                {activeTab === 2 && (
            <div className="subList" style={{ display: "block" }}>
              <p>APAC content goes here...</p>
            </div>
          )}
                <button
                  className={`tab ${activeTab === 3 ? 'active' : ''}`}
                  onClick={() => handleTabClick(3)}
                >
                  Europe
                </button>

                {activeTab === 3 && (
            <div className="subList" style={{ display: "block" }}>
              <p>Europe content goes here...</p>
            </div>
          )}
                <button
                  className={`tab ${activeTab === 4 ? 'active' : ''}`}
                  onClick={() => handleTabClick(4)}
                >
                  GCC
                </button>
                {activeTab === 4 && (
            <div className="subList" style={{ display: "block" }}>
              <p>GCC content goes here...</p>
            </div>
          )}
        </div>
      </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Countries