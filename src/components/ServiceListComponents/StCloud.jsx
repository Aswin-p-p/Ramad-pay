import React, { useRef, useState, useEffect } from 'react';
import '../Minneapolis/minneapolis.css'
import Countries from '../HomeComponents/Countries/Countries'
import PageForm from '../PageForm/PageForm'

const currencyList = {
    USD: "United States Dollar",
    EUR: "Euro",
    GBP: "British Pound Sterling",
    CAD: "Canadian Dollar",
    AUD: "Australian Dollar",
    JPY: "Japanese Yen",
    MXN: "Mexican Peso",
    AED: "United Arab Emirates Dirham",
    AFN: "Afghan Afghani",
    ALL: "Albanian Lek",
    AMD: "Armenian Dram",
    ANG: "Netherlands Antillean Guilder",
    AOA: "Angolan Kwanza",
    ARS: "Argentine Peso",
    AWG: "Aruban Florin",
    AZN: "Azerbaijani Manat",
    BAM: "Bosnia-Herzegovina Convertible Mark",
    BBD: "Barbadian Dollar",
    BDT: "Bangladeshi Taka",
    BGN: "Bulgarian Lev",
    BHD: "Bahraini Dinar",
    BIF: "Burundian Franc",
    BMD: "Bermudan Dollar",
    BND: "Brunei Dollar",
    BRL: "Brazilian Real",
    BTC: "Bitcoin",
    BTN: "Bhutanese Ngultrum",
    BWP: "Botswanan Pula",
    BYN: "Belarusian Ruble",
    BZD: "Belize Dollar",
    CDF: "Congolese Franc",
    CHF: "Swiss Franc",
    CNY: "Chinese Yuan",
    COP: "Colombian Peso",
    CZK: "Czech Koruna",
    DKK: "Danish Krone",
    DZD: "Algerian Dinar",
    EGP: "Egyptian Pound",
    ETB: "Ethiopian Birr",
    FJD: "Fijian Dollar",
    GEL: "Georgian Lari",
    GHS: "Ghanaian Cedi",
    HKD: "Hong Kong Dollar",
    IDR: "Indonesian Rupiah",
    ILS: "Israeli New Sheqel",
    INR: "Indian Rupee",
    IQD: "Iraqi Dinar",
    IRR: "Iranian Rial",
    ISK: "Icelandic Krona",
    JOD: "Jordanian Dinar",
    KES: "Kenyan Shilling",
    KGS: "Kyrgystani Som",
    KHR: "Cambodian Riel",
    KPW: "North Korean Won",
    KRW: "South Korean Won",
    KWD: "Kuwaiti Dinar",
    LAK: "Laotian Kip",
    LBP: "Lebanese Pound",
    LKR: "Sri Lankan Rupee",
    MAD: "Moroccan Dirham",
    MDL: "Moldovan Leu",
    MGA: "Malagasy Ariary",
    MMK: "Myanma Kyat",
    MNT: "Mongolian Tugrik",
    MUR: "Mauritian Rupee",
    MVR: "Maldivian Rufiyaa",
    MWK: "Malawian Kwacha",
    MYR: "Malaysian Ringgit",
    MZN: "Mozambican Metical",
    NAD: "Namibian Dollar",
    NGN: "Nigerian Naira",
    NOK: "Norwegian Krone",
    NPR: "Nepalese Rupee",
    NZD: "New Zealand Dollar",
    OMR: "Omani Rial",
    PEN: "Peruvian Sol",
    PHP: "Philippine Peso",
    PKR: "Pakistani Rupee",
    PLN: "Polish Zloty",
    QAR: "Qatari Rial",
    RON: "Romanian Leu",
    RUB: "Russian Ruble",
    SAR: "Saudi Riyal",
    SEK: "Swedish Krona",
    SGD: "Singapore Dollar",
    THB: "Thai Baht",
    TND: "Tunisian Dinar",
    TRY: "Turkish Lira",
    TWD: "New Taiwan Dollar",
    TZS: "Tanzanian Shilling",
    UAH: "Ukrainian Hryvnia",
    UGX: "Ugandan Shilling",
    USD: "United States Dollar",
    UYU: "Uruguayan Peso",
    VND: "Vietnamese Dong",
    ZAR: "South African Rand",
    ZMW: "Zambian Kwacha",
};


const API_KEY = "f1beda0417-157b4ba35a-srb6k0";
const API_URL = `https://api.fastforex.io/fetch-all?api_key=${API_KEY}`;

function StCloud() {
            const [currencies, setCurrencies] = useState([]);
            const [fromCurrency, setFromCurrency] = useState("USD");
            const [toCurrency, setToCurrency] = useState("KES");
            const [amount, setAmount] = useState(1);
            const [convertedAmount, setConvertedAmount] = useState(null);
            const [rates, setRates] = useState({});
      const dateInputRef = useRef(null);
  
  
      const handleOpenCalendar = () => {
        if (dateInputRef.current) {
          dateInputRef.current.showPicker();
        }
      };
    
      const handleSmoothScroll = (e) => {
        e.preventDefault(); // Prevent default anchor behavior
    
        const pageFormSection = document.getElementById('pageFormSection');
        if (pageFormSection) {
            pageFormSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll effect
        }
    };

       useEffect(() => {
            fetch(API_URL)
                .then(response => response.json())
                .then(data => {
                    if (data.results) {
                        setRates(data.results);
                        setCurrencies(Object.keys(data.results));
                    }
                })
                .catch(error => console.error("Error fetching currency data:", error));
        }, []);
    
            useEffect(() => {
                // Ensure both from and to currencies are available in the rates before computing.
                if (rates[fromCurrency] && rates[toCurrency]) {
                    const conversionRate = rates[toCurrency] / rates[fromCurrency];
                    setConvertedAmount((amount * conversionRate).toFixed(2));
                }
            }, [amount, fromCurrency, toCurrency, rates]);
        
            const handleCalendarClick = () => {
                dateInputRef.current.showPicker();
            };
  return (
   <>
       
       <main>
      <section className="commonHro serviceInAreaHero">
            <div className="container">
                <div className="cmpny-content cmpny-minne">
                    <h1 data-aos="fade-right" data-aos-duration="1000">
                        <span className="commSpn">St. Cloud's</span>
                        Link to Global <br/>
                        Financial Empowerment
                    </h1>
                </div>
                <div className="commHdImg srAreaInImg stpaulimg">
                    <img src="assets/serviceArea/bgimg.png" alt=""/>
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
                <div className="rmserArIn">
                    <div className="tite">
                        <h2>
                        Connecting St. Cloud to the World with Financial Ease
                        </h2>
                        <p>
                        St. Cloud’s Answer to Worldwide Money Movement: Simple, Swift, Secure.
                        </p>
                    </div>
                    <div className="serInBtn">
                        <div>
                            <a href="" onClick={handleSmoothScroll}>Learn More</a>
                        </div>
                        <div>
                            <a href="/find-Agent">
                                Find an agent near you
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="serviceAreaInCont">
                <div className="container">
                    <div className="Content-row">
                        <div className="aboutSection" data-aos="fade-right" data-aos-duration="1000">
                            <div className="row abtRow">
                                <div className="abt-content serArInCont col-md-12 col-lg-6">
                                    <div>
                                        <h3>Financial Innovation Starts in St. Cloud</h3>
                                            <p>
                                            St. Cloud’s vibrant community now has the world at its fingertips, thanks to Ramad Pay’s diverse financial services. Catering to both individuals and businesses, we offer solutions that transform the way you engage with the global economy. Our services range from seamless P2P remittances, enabling personal connections across borders, to sophisticated B2B digital payment platforms designed for St. Cloud’s dynamic business environment. NGOs in St. Cloud benefit from our efficient financial tools, ensuring their efforts have a broader impact. With our Customized Ramad Pay App, experience the future of banking today, combining security with convenience. Ramad Pay is dedicated to making St. Cloud a hub of financial innovation and connectivity.                                            </p>
                                    </div>
                                </div>
                                <div className="abtImg col-md-12 col-lg-6">
                                    <div className="rmd-col">
                                    <form className="pay-frm">
                                            <div className="input-box">
                                              <label>Amount</label>
                                              <input
                                            type="number"
                                            value={amount}
                                            onChange={(e) => setAmount(Number(e.target.value))}
                                        />
                                            </div>
                                            <div className="input-box">
                                              <label>From</label>
                                              <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                                            {currencies.map(code => (
                                                <option key={code} value={code}>
                                                    {`${code} - ${currencyList[code] || code}`}
                                                </option>
                                            ))}
                                        </select>
                                            </div>
                                            <div className="input-box">
                                              <label>To</label>
                                              <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                                            {currencies.map(code => (
                                                <option key={code} value={code}>
                                                    {`${code} - ${currencyList[code] || code}`}
                                                </option>
                                            ))}
                                        </select>
                                            </div>
                                            <div className="amount">
                                        <h2>{convertedAmount} {toCurrency}</h2>
                                    </div>
                                            <div className="rmd-currency">
                                              <div className="rmdCrncy">
                                                <img src="assets/serviceArea/currency.png" alt="" />
                                                <p>{fromCurrency}/{toCurrency} <br />Currency.Wiki</p>
                                              </div>
                                                <div className="custom-date-picker">
                                                  <input type="date" id="date-input" ref={dateInputRef} />
                                                  <span className="calendar-icon" id="open-calendar" onClick={handleOpenCalendar}>
                                                    <img src="assets/serviceArea/calender.png" alt="Calendar Icon" />
                                                  </span>
                                                </div>
                                            </div>
                                          </form>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="desclaimer">
                        *Converter uses mid-market sell rate settlement. Information only. Sending money won’t get this rate. <br/> Please check our mobile app for an updated rate.
                    </p>
                </div>
            </div>
        </section>





        <section className="serviceAreaInFeat" id="pageFormSection">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="saIFeatBlk">
                            <div className="saiIco">
                                <img src="assets/serviceArea/p2p.png" alt=""/>
                            </div>
                            <div className="saiCont">
                                <h3>P2P Remittance 
                                    Services</h3>
                                    <p>
                                    Your St. Cloud Gateway for Fast International Money Transfers
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="saIFeatBlk">
                            <div className="saiIco">
                                <img src="assets/serviceArea/support.png" alt=""/>
                            </div>
                            <div className="saiCont">
                                <h3>Support for
                                    NGOs</h3>
                                    <p>
                                    Enhancing St. Cloud’s NGO Impact with Streamlined Financial Solutions                                    </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="saIFeatBlk">
                            <div className="saiIco">
                                <img src="assets/serviceArea/b2b.png" alt=""/>
                            </div>
                            <div className="saiCont">
                                <h3>Digital Payments
                                    for B2B</h3>
                                    <p>
                                    Digital Payment Mastery for St. Cloud Businesses                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="saIFeatBlk">
                            <div className="saiIco">
                                <img src="assets/serviceArea/customized.png" alt=""/>
                            </div>
                            <div className="saiCont">
                                <h3>Customized 
                                    Ramad Pay App</h3>
                                    <p>
                                    St. Cloud Goes Digital: The Future of Banking is Here                                    </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="saIFeatBlk">
                            <div className="saiIco">
                                <img src="assets/serviceArea/payment.png" alt=""/>
                            </div>
                            <div className="saiCont">
                                <h3>Global Payments 
                                    Agency</h3>
                                    <p>
                                    St. Cloud Businesses: Expand Your Reach with Global Payment Solutions                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Countries/>

        <PageForm/>
      </main>
   </>
  )
}

export default StCloud