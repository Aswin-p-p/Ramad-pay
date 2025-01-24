import React from 'react';
import './PageForm.css';

function PageForm() {
    return (
        <section className="contactSec">
            <div className="container">
                <div className="cntct-Frm">
                    <div className="FrmSec">
                    <div>
                    <h3>Your Information,<br />Your Terms - Join RamadPay Today!</h3>
                        <form className="form">
                            <div className="cntct-inputBox">
                                <input type="text" placeholder="Your Name" />
                                <input type="text" placeholder="Email Address" />
                            </div>
                            <input type="number" placeholder="Phone Number" />
                            <div className="custom-chkbox d-flex col-30">
                                <input type="checkbox" id="accounts" />
                                <label htmlFor="accounts">
                                    By clicking this box, you agree to receive SMS from Ramad Pay Inc. You can reply
                                    "STOP" to opt-out at any time. This is my Privacy Policy. If the box is not clicked,
                                    the form should not be sent.
                                </label>
                            </div>
                            <div className="join-btn">
                                <button type="submit">Join Ramad Pay</button>
                            </div>
                        </form>
                    </div>
                    </div>
                    <div className="col-Img">
                        <img src="assets/company/formooter.png" alt="Join RamadPay" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PageForm;
