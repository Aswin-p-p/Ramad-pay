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

  const toggleHoverData = (countryName) => {
    setHoveredCountry((prev) => (prev === countryName ? null : countryName));
  };
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
        businessType: 'P2P',
      }
    },
    {
      name: 'Burundi', flag: 'assets/CountryFlag/burundi.jpg',
      hoverData: {
        payoutType: 'Wallets',
        coverage: 'Ecocash',
        businessType: 'P2P',
      }
    },
    {
      name: 'Cameroon', flag: 'assets/CountryFlag/cameroon.jpg',
      hoverData: {
        payoutType: 'Wallets; Banks4',
        coverage: 'All Banks4',
        businessType: 'P2P',
      }
    },
    {
      name: 'C.A Republic', flag: 'assets/CountryFlag/CA.jpg',
      hoverData: {
        payoutType: 'Wallets',
        coverage: 'Orange',
        businessType: 'P2P',
      }
    },
    {
      name: 'Chad', flag: 'assets/CountryFlag/chad.jpg',
      hoverData: {
        payoutType: 'Wallets',
        coverage: 'Airtel; Moov',
        businessType: 'P2P',
      }
    },
    {
      name: 'Congo B', flag: 'assets/CountryFlag/republic-of-the-congo.png',
      hoverData: {
        payoutType: 'Wallets',
        coverage: 'Airtel; MTN',
        businessType: 'P2P',
      }
    },
    {
      name: 'DRC', flag: 'assets/CountryFlag/DRC.jpg',
      hoverData: {
        payoutType: 'Wallets',
        coverage: 'Airtel',
        businessType: 'P2P',
      }
    },
    {
      name: 'Egypt', flag: 'assets/CountryFlag/egypt.jpg',
      hoverData: {
        payoutType: 'Wallets; Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }
    },
    {
      name: 'Ethopia', flag: 'assets/CountryFlag/ethopya.jpg',
      hoverData: {
        payoutType: 'Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }
    },
    {
      name: 'Gabon', flag: 'assets/CountryFlag/gabon.jpg',
      hoverData: {
        payoutType: 'Wallets; Banks',
        coverage: 'Airtel, Moov; All Banks',
        businessType: 'P2P',
      }
    },
    {
      name: 'Ghana', flag: 'assets/CountryFlag/ghana.png',
      hoverData: {
        payoutType: 'Wallets; Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }
    },
    {
      name: 'Guinea Bissau', flag: 'assets/CountryFlag/Guinea Bissau.png',
      hoverData: {
        payoutType: 'Wallets',
        coverage: 'MTN',
        businessType: 'P2P',
      }
    },
    { 
      name: 'Guinea Conakry', flag: 'assets/CountryFlag/guinea.jpg',
      hoverData: {
        payoutType: 'Wallets',
        coverage: 'MTN',
        businessType: 'P2P',
      }
      
     },
  
  


    { 
      name: 'Ivory Coast', flag: 'assets/CountryFlag/ivory.jpg',
      hoverData: {
        payoutType: 'Wallets; Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }
    
    },
    { name: 'Kenya', flag: 'assets/CountryFlag/kenya.jpg',
      hoverData: {
        payoutType: 'Banks; Wallets',
        coverage: 'All Banks; Airtel, M-Pesa',
        businessType: 'P2P',
      }

     },
     { name: 'Liberia', flag: 'assets/CountryFlag/liberia.png',
      hoverData: {
        payoutType: 'Wallets; Banks',
        coverage: 'MTN; UBA Banks',
        businessType: 'P2P',
      }

     },
    { 
      name: 'Malawi', flag: 'assets/CountryFlag/malawi.jpg',
      hoverData: {
        payoutType: 'Banks; Wallets',
        coverage: 'All Banks; Airtel',
        businessType: 'P2P',
      }

     },
     { 
      name: 'Mali', flag: 'assets/CountryFlag/mali.jpg',
      hoverData: {
        payoutType: 'Wallets',
        coverage: 'Orange, Malitel',
        businessType: 'P2P',
      }

     },
     { 
      name: 'Mozambique', flag: 'assets/CountryFlag/mozambique.jpg',
      hoverData: {
        payoutType: 'Wallets',
        coverage: 'M-Pesa, M-kesh',
        businessType: 'P2P',
      }

     },
     { 
      name: 'Nigeria', flag: 'assets/CountryFlag/nigeria.jpg',
      hoverData: {
        payoutType: 'Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }

     },
     { 
      name: 'Rwanda', flag: 'assets/CountryFlag/rwanda.jpg',
      hoverData: {
        payoutType: 'Wallets; Banks',
        coverage: 'MTN, Airtel-Tigo; All Banks',
        businessType: 'P2P',
      }

     },
     { 
      name: 'Senegal', flag: 'assets/CountryFlag/senegal.jpg',
      hoverData: {
        payoutType: 'Wallets',
        coverage: 'All Banks; Orange, Wave, Tigo, Wizall',
        businessType: 'P2P',
      }

     },
     { 
      name: 'Sierra Leone', flag: 'assets/CountryFlag/sierra.jpg',
      hoverData: {
        payoutType: 'Wallets',
        coverage: 'Orange',
        businessType: 'P2P',
      }

     },
     { 
      name: 'Somalia', flag: 'assets/CountryFlag/somalia.jpg',
      hoverData: {
        payoutType: 'Banks; Wallets',
        coverage: 'Banks; Zaad, EVC-Plus, Premier Wallet, Sahal',
        businessType: 'P2P',
      }

     },
     { 
      name: 'South Africa', flag: 'assets/CountryFlag/S-africa.jpg',
      hoverData: {
        payoutType: 'Banks',
        coverage: ' All Banks',
        businessType: 'P2P',
      }

     }, 
     { 
      name: 'South Sudan', flag: 'assets/CountryFlag/S-sudan.jpg',
      hoverData: {
        payoutType: 'Wallets',
        coverage: 'm-Gurush',
        businessType: 'P2P',
      }

     }, 


     { 
      name: 'Tanzania', flag: 'assets/CountryFlag/tanzania.jpg',
      hoverData: {
        payoutType: 'Banks; Wallets',
        coverage: 'All Banks; Airtel, Vodacom, Tigo',
        businessType: 'P2P',
      }

     },
     { 
      name: 'Uganda', flag: 'assets/CountryFlag/uganda.jpg',
      hoverData: {
        payoutType: 'Banks; Wallets',
        coverage: 'All Banks; MTN, Airtel',
        businessType: 'P2P',
      }

     },
     { 
      name: 'Zambia', flag: 'assets/CountryFlag/zambia.jpg',
      hoverData: {
        payoutType: 'Wallets',
        coverage: 'MTN, Airtel',
        businessType: 'P2P',
      }

     },
  ];





  const usacountries = [
    {
      name: 'Canada',
      flag: 'assets/CountryFlag/canada.png',
      hoverData: {
        payoutType: 'Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }
    },
    {
      name: 'Bolivia', flag: 'assets/CountryFlag/bolivia.png', hoverData: {
        payoutType: 'Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }
    },
    {
      name: 'Brazil', flag: 'assets/CountryFlag/brazil.png',
      hoverData: {
        payoutType: 'Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }
    },
    {
      name: 'Colombia', flag: 'assets/CountryFlag/colombia.png',
      hoverData: {
        payoutType: 'Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }
    },
    {
      name: 'Haiti', flag: 'assets/CountryFlag/Haiti.png',
      hoverData: {
        payoutType: 'Wallets',
        coverage: 'Digicel',
        businessType: 'P2P5',
      }
    },
    {
      name: 'Mexico', flag: 'assets/CountryFlag/mexico.png',
      hoverData: {
        payoutType: 'Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }
    },
    {
      name: 'Paraguay', flag: 'assets/CountryFlag/paraguay.png',
      hoverData: {
        payoutType: 'Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }
    },
    {
      name: 'Peru', flag: 'assets/CountryFlag/peru.png',
      hoverData: {
        payoutType: 'Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }
    },
    {
      name: 'Uruguay', flag: 'assets/CountryFlag/uruguay.png',
      hoverData: {
        payoutType: 'Banks',
        coverage: 'All Banks',
        businessType: 'P2P9',
      }
    },
    {
      name: '', flag: '',
     
    },
 

  ];




  const Aspacountries = [
    {
      name: 'Cambodia',
      flag: 'assets/CountryFlag/cambodia.png',
      hoverData: {
        payoutType: 'Wallets',
        coverage: 'Wings',
        businessType: 'P2P',
      }
    },
    {
      name: 'China', flag: 'assets/CountryFlag/china.png', hoverData: {
        payoutType: 'Wallets; Banks',
        coverage: ' AliPay; All Banks',
        businessType: 'P2P',
      }
    },
    {
      name: 'Hong Kong', flag: 'assets/CountryFlag/hong-kong.png',
      hoverData: {
        payoutType: 'Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }
    },
    {
      name: 'India', flag: 'assets/CountryFlag/india.png',
      hoverData: {
        payoutType: 'Banks',
        coverage: 'All Banks',
        businessType: 'P2P4',
      }
    },
    {
      name: 'Malaysia', flag: 'assets/CountryFlag/malaysia.png',
      hoverData: {
        payoutType: 'Banks',
        coverage: 'All Banks',
        businessType: 'P2P5',
      }
    },
    {
      name: 'Nepal', flag: 'assets/CountryFlag/nepal.png',
      hoverData: {
        payoutType: 'Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }
    },
    {
      name: 'Pakistan', flag: 'assets/CountryFlag/pakistan.png',
      hoverData: {
        payoutType: 'Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }
    },
    {
      name: 'Philippines', flag: 'assets/CountryFlag/philippens.png',
      hoverData: {
        payoutType: 'Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }
    },
    {
      name: '', flag: '',
     
    },
    {
      name: '', flag: '',
     
    },

  ];


  const europe = [
    {
      name: 'Belgium',
      flag: 'assets/CountryFlag/belgium.png',
      hoverData: {
        payoutType: 'Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }
    },
    {
      name: 'Cyprus', flag: 'assets/CountryFlag/cyprus.png',
      hoverData: {
        payoutType: 'Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }
    },
    {
      name: 'Finland', flag: 'assets/CountryFlag/finland.png',
      hoverData: {
        payoutType: 'Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }
    },
    {
      name: 'France', flag: 'assets/CountryFlag/france.png',
      hoverData: {
        payoutType: 'Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }
    },
    {
      name: 'Germany', flag: 'assets/CountryFlag/germany.png',
      hoverData: {
        payoutType: 'Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }
    },
    {
      name: 'Greece', flag: 'assets/CountryFlag/greece.png',
      hoverData: {
        payoutType: 'Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }
    },
    {
      name: 'Italy', flag: 'assets/CountryFlag/italy.png',
      hoverData: {
        payoutType: 'Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }
    },
    {
      name: 'Malta', flag: 'assets/CountryFlag/malta.png',
      hoverData: {
        payoutType: 'Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }
    },
    {
      name: 'Netherlands', flag: 'assets/CountryFlag/netherlands.png',
      hoverData: {
        payoutType: 'Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }
    },
    {
      name: 'Spain', flag: 'assets/CountryFlag/spain.png',
      hoverData: {
        payoutType: 'Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }
    },
    {
      name: 'Sweden', flag: 'assets/CountryFlag/sweden.png',
      hoverData: {
        payoutType: 'Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }
    },
    {
      name: 'Turkey', flag: 'assets/CountryFlag/turkey.png',
      hoverData: {
        payoutType: 'Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }
    },
    {
      name: 'United Kingdom', flag: 'assets/CountryFlag/united-kingdom.png',
      hoverData: {
        payoutType: 'Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }
    },

    {
      name: '', flag: '',
     
    },
    {
      name: '', flag: '',
     
    },
   
  ];


  const Gcc = [
    {
      name: 'Bahrain', flag: 'assets/CountryFlag/bahrain.png',
      hoverData: {
        payoutType: 'Banks',
        coverage: 'All Banks',
        businessType: 'P2P',
      }
    },
    {
      name: 'UAE', flag: 'assets/CountryFlag/united-arab-emirates.png',
       hoverData: {
        payoutType: 'Wallets2; Banks',
        coverage: 'All Banks2',
        businessType: 'P2P2',
      }
    },
   



  
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
                {chunkArray(usacountries, 5).map((countryChunk, chunkIndex) => (
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


                <div className={`tab-content ${activeTab === 2 ? 'activeContent' : ''}`}>
                {chunkArray(Aspacountries, 5).map((countryChunk, chunkIndex) => (
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


                <div className={`tab-content ${activeTab === 3 ? 'activeContent' : ''}`}>
                {chunkArray(europe, 5).map((countryChunk, chunkIndex) => (
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


                <div className={`tab-content ${activeTab === 4 ? 'activeContent' : ''}`}>
                {chunkArray(Gcc, 5).map((countryChunk, chunkIndex) => (
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
                  onClick={() => toggleHoverData(country.name)}

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
                {usacountries.map((country, index) => (
                <div
                  className="listing"
                  key={index}
                  onClick={() => toggleHoverData(country.name)}
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
                  className={`tab ${activeTab === 2 ? 'active' : ''}`}
                  onClick={() => handleTabClick(2)}
                >
                  APAC
                </button>

                {activeTab === 2 && (
            <div className="subList" style={{ display: "block" }}>
                 {Aspacountries.map((country, index) => (
                <div
                  className="listing"
                  key={index}
                  onClick={() => toggleHoverData(country.name)}
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
                  className={`tab ${activeTab === 3 ? 'active' : ''}`}
                  onClick={() => handleTabClick(3)}
                >
                  Europe
                </button>

                {activeTab === 3 && (
            <div className="subList" style={{ display: "block" }}>
              {europe.map((country, index) => (
                <div
                  className="listing"
                  key={index}
                  onClick={() => toggleHoverData(country.name)}
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
                  className={`tab ${activeTab === 4 ? 'active' : ''}`}
                  onClick={() => handleTabClick(4)}
                >
                  GCC
                </button>
                {activeTab === 4 && (
            <div className="subList" style={{ display: "block" }}>
            {Gcc.map((country, index) => (
                <div
                  className="listing"
                  key={index}
                  onClick={() => toggleHoverData(country.name)}
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
        </div>
      </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Countries