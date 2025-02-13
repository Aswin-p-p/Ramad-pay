import React, { useState } from "react";
import Swal from "sweetalert2";
import "./HomePageForm.css";
import PreLoader from "../Preloader/PreLoader";

function HomePageForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    agreed: false,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number.";
    }
    if (!formData.agreed) newErrors.agreed = "You must agreed to the terms.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    if (!validateForm()) {
      setLoading(false); // ✅ Fix: Reset loading state on validation failure
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please fix the errors before submitting.",
      });
      return;
    }
  
    try {
      const response = await fetch("https://ramadpayserver.onrender.com/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Your application has been submitted successfully!",
        });
        setFormData({ name: "", email: "", phone: "", agree: false });
        setErrors({});
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false); // ✅ Fix: Ensures loading state is reset in all cases
    }
  };
  

  return (
    <>
     {loading && <PreLoader />}
    <section className="hm-cntct">
      
      <div className="container">
        <div className="hmCntct-contain">
          <div className="CntBnr">
            <img src="assets/home/cntctBnner.png" alt="Banner" />
          </div>
          <div className="CntTxt-contain">
            <div className="Cnct-TXT">
              <h2>Become a Ramad Pay Agent</h2>
              <p className="subCnt">Start Earning Commissions and Making a Difference</p>
              <p>
                Join the Ramad Pay Agent network for top commissions, strong support, and
                Text2Pay services. Apply now to revolutionize money transfers!
              </p>
            </div>
          </div>
          <div className="CntTxt-contain">
            <div className="hmCnct-frm">
              <form >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <p className="error">{errors.name}</p>}

                <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p className="error">{errors.email}</p>}

                <input
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="error">{errors.phone}</p>}

                <div className="custom-chkbox hmCheck d-flex col-30">
                  <input
                    type="checkbox"
                    id="accounts"
                    name="agreed"
                    checked={formData.agreed}
                    onChange={handleChange}
                  />
                  <label htmlFor="accounts">
                    By clicking this box, you agreed to receive SMS from Ramad Pay Inc.
                    You can reply stop to opt-out at any time. This is my Privacy Policy.
                    If the box is not clicked, then the form should not be sent.
                  </label>
                </div>
                {errors.agreed && <p className="error">{errors.agreed}</p>}

                <div className="hmNxtBtn">
                  <a type="submit" onClick={handleSubmit}>Next</a>
                </div>
              </form>
            </div>
          </div>
          <div className="manCnct">
            <img src="assets/home/manCnct.png" alt="Man Connecting" />
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
}

export default HomePageForm;
