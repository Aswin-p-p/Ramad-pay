import React, { useRef, useState, useEffect } from 'react';
import './minneapolis.css'


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
    UYU: "Uruguayan Peso",
    VND: "Vietnamese Dong",
    ZAR: "South African Rand",
    ZMW: "Zambian Kwacha",
};


const API_KEY = import.meta.env.VITE_OPEN_EXCHANGE_KEY;
const API_URL = `https://openexchangerates.org/api/latest.json?app_id=${API_KEY}`;
function CurrencyConverter() {
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
    useEffect(() => {
        const storedRates = sessionStorage.getItem("exchangeRates");
        if (storedRates) {
            // Use the stored rates if available
            const parsedRates = JSON.parse(storedRates);
            setRates(parsedRates);
            setCurrencies(Object.keys(parsedRates));
          } else {
            // Fetch new rates only if not available in sessionStorage
            fetch(API_URL)
              .then((response) => response.json())
              .then((data) => {
                if (data.rates) {
                  sessionStorage.setItem("exchangeRates", JSON.stringify(data.rates));
                  setRates(data.rates);
                  setCurrencies(Object.keys(data.rates));
                }
              })
              .catch((error) => console.error("Error fetching currency data:", error));
          }
    }, []);

    useEffect(() => {
        if (rates[fromCurrency] && rates[toCurrency]) {
          const conversionRate = rates[toCurrency] / rates[fromCurrency];
          setConvertedAmount((amount * conversionRate).toFixed(2));
        }
      }, [amount, fromCurrency, toCurrency, rates]);


    return (
        <>
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

        </>
    )
}

export default CurrencyConverter