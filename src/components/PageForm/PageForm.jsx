import React, { useState } from "react";
import Swal from "sweetalert2";
import "./PageForm.css";

function PageForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        agreed: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation checks
        if (!formData.name || !formData.email || !formData.phone) {
            Swal.fire("Error", "All fields are required!", "error");
            return;
        }

        if (!formData.agreed) {
            Swal.fire("Error", "You must agree to the terms before submitting!", "error");
            return;
        }

        Swal.fire("Success", "You have successfully joined RamadPay!", "success");

        setFormData({
            name: "",
            email: "",
            phone: "",
            agreed: false,
        });
    };

    return (
        <section className="contactSec">
            <div className="container">
                <div className="cntct-Frm">
                    <div className="FrmSec">
                        <div>
                            <h3>Your Information,<br />Your Terms - Join RamadPay Today!</h3>
                            <form className="form" >
                                <div className="cntct-inputBox">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <input
                                    type="number"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <div className="custom-chkbox d-flex col-30">
                                    <input
                                        type="checkbox"
                                        id="accounts"
                                        name="agreed"
                                        checked={formData.agreed}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="accounts">
                                        By clicking this box, you agree to receive SMS from Ramad Pay Inc. You can reply
                                        "STOP" to opt-out at any time. This is my Privacy Policy. If the box is not clicked,
                                        the form should not be sent.
                                    </label>
                                </div>
                                <div className="join-btn">
                                    <button type="submit" onClick={handleSubmit}>Join Ramad Pay</button>
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
