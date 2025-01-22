import React, { useRef } from 'react';
import './Service.css';
import DateIcon from '../../../assets/images/calender.png'
import Currency from '../../../assets/images/currency.png'

function Service() {
    const dateInputRef = useRef(null);

    const openCalendarRef = useRef(null);

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
                                        <input type="number" />
                                    </div>
                                    <div className="input-box">
                                              <label>From</label>
                                              <select name="currency" id="currency">
                                                <option value="usd">USD - United States Dollar</option>
                                                <option value="CAD">CAD - Canadian Dollar</option>
                                                <option value="JPY">JPY - Japanese Yen</option>
                                                <option value="KES">KES - Kenyan Shilling</option>
                                              </select>
                                            </div>
                                            <div className="input-box">
                                              <label>To</label>
                                              <select name="currency" id="currency">
                                                <option value="usd">USD - United States Dollar</option>
                                                <option value="CAD">CAD - Canadian Dollar</option>
                                                <option value="JPY">JPY - Japanese Yen</option>
                                                <option value="KES">KES - Kenyan Shilling</option>
                                              </select>
                                            </div>
                                    <div className="amount">
                                        <h2>129.26 Ksh</h2>
                                    </div>
                                    <div className="rmd-currency">
                                        <div className="rmdCrncy">
                                            <img src={Currency} alt="" />
                                            <p>USD/KES <br />Currency.Wiki</p>
                                        </div>
                                        <div className="custom-date-picker">
                                            <input
                                                type="date"
                                                ref={dateInputRef}
                                                id="date-input"
                                                onClick={handleCalendarClick}
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