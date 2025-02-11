import React, { useRef, useState, useEffect } from 'react';
import './Service.css';
import DateIcon from '../../../assets/images/calender.png'
import Currency from '../../../assets/images/currency.png'



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
function Service() {
    const dateInputRef = useRef(null);
    const openCalendarRef = useRef(null);

    const [currencies, setCurrencies] = useState([]);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("KES");
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [rates, setRates] = useState({});

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
        <div>
            <section className="rmd-payServices">
                <div className="container">
                    <div className="rmd-serviceTxt">
                        <h2 data-aos="fade-down" data-aos-duration="1000">Your Payment, Just a Text Away</h2>
                        <h4 data-aos="fade-in" data-aos-duration="1000">Introducing Ramad Pay's New Text2Pay Service</h4>
                    </div>
                    <div className="pay-services">
                        <div className="row rmd-rw">
                            <div className="rmd-col col-md-5" data-aos="fade-right" data-aos-duration="1000">
                                <form className="pay-frm">
                                    <div className="input-box">
                                        <label>Amount</label>
                                        <input
                                            type="number"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value ? Number(e.target.value) : '')}
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
                                            <img src={Currency} alt="Currency" />
                                            <p>{fromCurrency}/{toCurrency} <br />Currency.Wiki</p>
                                        </div>
                                        <div className="custom-date-picker">
                                            <input
                                                type="date"
                                                ref={dateInputRef}
                                                id="date-input"
                                            />
                                            <span
                                                className="calendar-icon"
                                                ref={openCalendarRef}
                                                onClick={handleCalendarClick}
                                            >
                                                <img src={DateIcon} alt="Calendar Icon" />
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="rmd-col col-md-5" data-aos="fade-right" data-aos-duration="1000">
                                <form className="pay-frm send-box">
                                    <div className="input-box">
                                        <label>Mobile Number</label>
                                        <input type="number" />
                                    </div>
                                    <p>
                                        By entering your mobile number you agree to receive text
                                        messages. Standard message and data rates may apply. Message
                                        frequency varies.
                                    </p>
                                    <div className="hlp-cntct">
                                        <p>
                                            <span>Call 562-567-6776 </span> for help. <br />
                                            Text <span> STOP</span> to cancel.
                                        </p>
                                    </div>
                                    <div className="send-btn"><button>Send Amount</button></div>
                                </form>
                            </div>
                        </div>

                        <div className="rmd-txt">
                            <p>
                                *Converter uses mid-market sell rate settlement. Information
                                only. Sending money won’t get this rate. Please check our mobile
                                app for an updated rate.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Service