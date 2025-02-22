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
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Missing Details!",
        text: "Please fill in all required fields before submitting.",
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
      setLoading(false); 
    }
  };
//   const iframeContent = `
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>

// <body>
//     <!-- Note :
//    - You can modify the font style and form style to suit your website. 
//    - Code lines with comments Do not remove this code are required for the form to work properly, make sure that you do not remove these lines of code. 
//    - The Mandatory check script can modified as to suit your business needs. 
//    - It is important that you test the modified form before going live.-->
//     <div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm'
//         style='background-color: white;color: black;max-width: 600px;'>
//         <meta name='viewport' content='width=device-width, initial-scale=1.0'>
//         <META HTTP-EQUIV='content-type' CONTENT='text/html;charset=UTF-8'>

//         <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js'></script>

//         <style>
//             .wf_customMessageBox {
//                 font-family: Arial, Helvetica, sans-serif;
//                 color: #132C14;
//                 background: #F5FAF5;
//                 box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.25);
//                 max-width: 90%;
//                 width: max-content;
//                 word-break: break-word;
//                 z-index: 11000;
//                 border-radius: 6px;
//                 border: 1px solid #A9D3AB;
//                 min-width: 100px;
//                 padding: 10px 15px;
//                 display: flex;
//                 align-items: center;
//                 position: fixed;
//                 top: 20px;
//                 left: 50%;
//                 transform: translate(-50%, 0);
//             }

//             .wf_customCircle {
//                 position: relative;
//                 background-color: #12AA67;
//                 border-radius: 100%;
//                 width: 20px;
//                 height: 20px;
//                 flex: none;
//                 margin-right: 7px;
//             }

//             .wf_customCheckMark {
//                 box-sizing: unset !important;
//                 position: absolute;
//                 transform: rotate(45deg) translate(-50%, -50%);
//                 left: 6px;
//                 top: 9px;
//                 height: 8px;
//                 width: 3px;
//                 border-bottom: 2px solid #fff;
//                 border-right: 2px solid #fff;
//             }

//             .wf_customClose {
//                 box-sizing: border-box;
//                 position: relative;
//                 width: 18px;
//                 height: 18px;
//             }

//             .wf_customClose::after,
//             .wf_customClose::before {
//                 content: '';
//                 display: block;
//                 box-sizing: border-box;
//                 position: absolute;
//                 width: 12px;
//                 height: 1.5px;
//                 background: #616E88;
//                 transform: rotate(45deg);
//                 border-radius: 5px;
//                 top: 8px;
//                 left: 1px
//             }

//             .wf_customClose::after {
//                 transform: rotate(-45deg)
//             }
//         </style>
//         <div class='wf_customMessageBox' id='wf_splash' style='display:none'>
//             <div class='wf_customCircle'>
//                 <div class='wf_customCheckMark'></div>
//             </div>
//             <span id='wf_splash_info'></span>
//             </p>
//         </div>
//         <form id='webform6387495000000855040' name=WebToLeads6387495000000855040 accept-charset='UTF-8'>
//             <input type='text' style='display:none;' name='xnQsjsdp'
//                 value='d8a34f74d206ba98b09d1923ae71e1ffad21fb32d9ec42c0cd70d9d227922be8'></input>
//             <input type='hidden' name='zc_gad' id='zc_gad' value=''></input>
//             <input type='text' style='display:none;' name='xmIwtLD'
//                 value='a15992f8bb0867bcc7658767318e441ce372b552372860b1c3b8b230ee2bc4c2f6839307bcc695e4777ce3d8fb0712c5'></input>
//             <input type='text' style='display:none;' name='actionType' value='TGVhZHM='></input>
//             <input type='text' style='display:none;' name='returnURL' value='null'> </input>
//             <!-- Do not remove this code. -->
//             <style>
//                 html,
//                 body {
//                     margin: 0px;
//                 }

//                 .formsubmit.zcwf_button {
//                     color: white !important;
//                     /* background: transparent linear-gradient(0deg, #0279FF 0%, #00A3F3 100%); */
//                     background-color: rgb(6, 126, 111);
//                 }

//                 #crmWebToEntityForm.zcwf_lblLeft {
//                     width: 100%;
//                     padding: 25px;
//                     margin: 0 auto;
//                     box-sizing: border-box;
//                 }

//                 #crmWebToEntityForm.zcwf_lblLeft * {
//                     /* box-sizing: border-box; */
//                 }

//                 #crmWebToEntityForm {
//                     text-align: left;
//                 }

//                 #crmWebToEntityForm * {
//                     direction: ltr;
//                 }

//                 .zcwf_lblLeft .zcwf_title {
//                     word-wrap: break-word;
//                     padding: 0px 6px 10px;
//                     font-weight: bold
//                 }

//                 .zcwf_lblLeft.cpT_primaryBtn:hover {
//                     background: linear-gradient(#02acff 0, #006be4 100%) no-repeat padding-box !important;
//                     box-shadow: 0 -2px 0 0 #0159b9 inset !important;
//                     border: 0 !important;
//                     color: #fff !important;
//                     outline: 0 !important;
//                 }

//                 .zcwf_lblLeft .zcwf_col_fld input[type=text],
//                 input[type=password],
//                 .zcwf_lblLeft .zcwf_col_fld textarea {
//                     width: 75%;
//                     height: 38px;
//                     border: 1px solid #c0c6cc !important;
//                     resize: vertical;
//                     border-radius: 12px;
//                     float: left;
//                     padding: 4px 36px;
//                 }

//                 .zcwf_lblLeft .zcwf_col_lab {
//                     width: 30%;
//                     word-break: break-word;
//                     padding: 0px 6px 0px;
//                     margin-right: 10px;
//                     margin-top: 5px;
//                     float: left;
//                     min-height: 1px;
//                 }

//                 .zcwf_lblLeft .zcwf_col_fld {
//                     float: left;
//                     width: 68%;
//                     padding: 0px 6px 0px;
//                     position: relative;
//                     margin-top: 5px;
//                 }

//                 .zcwf_lblLeft .zcwf_privacy {
//                     padding: 6px;
//                 }

//                 .zcwf_lblLeft .wfrm_fld_dpNn {
//                     display: none;
//                 }

//                 .dIB {
//                     display: inline-block;
//                 }

//                 .zcwf_lblLeft .zcwf_col_fld_slt {
//                     width: 60%;
//                     border: 1px solid #ccc;
//                     background: #fff;
//                     border-radius: 4px;
//                     font-size: 14px;
//                     float: left;
//                     resize: vertical;
//                     padding: 2px 5px;
//                 }

//                 .zcwf_lblLeft .zcwf_row:after,
//                 .zcwf_lblLeft .zcwf_col_fld:after {
//                     content: '';
//                     display: table;
//                     clear: both;
//                 }

//                 .zcwf_lblLeft .zcwf_col_help {
//                     float: left;
//                     margin-left: 7px;
//                     font-size: 14px;
//                     max-width: 35%;
//                     word-break: break-word;
//                 }

//                 .zcwf_lblLeft .zcwf_help_icon {
//                     cursor: pointer;
//                     width: 16px;
//                     height: 16px;
//                     display: inline-block;
//                     background: #fff;
//                     border: 1px solid #c0c6cc;
//                     color: #c1c1c1;
//                     text-align: center;
//                     font-size: 11px;
//                     line-height: 16px;
//                     font-weight: bold;
//                     border-radius: 50%;
//                 }

//                 /* .zcwf_lblLeft .zcwf_row {margin: 15px 0px;} */
//                 .zcwf_lblLeft .formsubmit {
//                     margin-right: 5px;
//                     cursor: pointer;
//                     color: #313949;
//                     font-size: 14px;
//                 }

//                 .zcwf_lblLeft .zcwf_privacy_txt {
//                     width: 90%;
//                     color: rgb(0, 0, 0);
//                     font-size: 14px;
//                     font-family: Arial;
//                     display: inline-block;
//                     vertical-align: top;
//                     color: #313949;
//                     padding-top: 2px;
//                     margin-left: 6px;
//                 }

//                 .zcwf_lblLeft .zcwf_button {
//                     font-size: 16px;
//                     color: #313949;
//                     border: 1px solid #c0c6cc;
//                     padding: 12px 63px;
//                     border-radius: 10px;
//                     cursor: pointer;
//                     max-width: 185px;
//                     overflow: hidden;
//                     text-overflow: ellipsis;
//                     white-space: nowrap;

//                 }

//                 .zcwf_lblLeft .zcwf_tooltip_over {
//                     position: relative;
//                 }

//                 .zcwf_lblLeft .zcwf_tooltip_ctn {
//                     position: absolute;
//                     background: #dedede;
//                     padding: 3px 6px;
//                     top: 3px;
//                     border-radius: 4px;
//                     word-break: break-word;
//                     min-width: 100px;
//                     max-width: 150px;
//                     color: #313949;
//                     z-index: 100;
//                 }

//                 .zcwf_lblLeft .zcwf_ckbox {
//                     float: left;
//                 }

//                 .zcwf_lblLeft .zcwf_file {
//                     width: 55%;
//                     box-sizing: border-box;
//                     float: left;
//                 }

//                 .cBoth:after {
//                     content: '';
//                     display: block;
//                     clear: both;
//                 }

//                 @media all and (max-width: 600px) {

//                     .zcwf_lblLeft .zcwf_col_lab,
//                     .zcwf_lblLeft .zcwf_col_fld {
//                         width: auto;
//                         float: none !important;
//                     }

//                     .zcwf_lblLeft .zcwf_col_help {
//                         width: 40%;
//                     }
//                 }
//             </style>
//             <div class='zcwf_row'>
//                 <div class='zcwf_col_lab' style='font-size:14px; font-family: Arial;'><label for='Last_Name'><span
//                             style='color:red;'></span></label></div>
//                 <div class='zcwf_col_fld'><input type='text' id='Last_Name' placeholder="Your Name" aria-required='true'
//                         aria-label='Last Name' name='Last Name' aria-valuemax='80' maxlength='80'></input>
//                     <div class='zcwf_col_help'></div>
//                 </div>
//             </div>
//             <div class='zcwf_row'>
//                 <div class='zcwf_col_lab' style='font-size:14px; font-family: Arial;'><label for='Email'><span
//                             style='color:red;'></span></label></div>
//                 <div class='zcwf_col_fld'><input type='text' ftype='email' placeholder="Email Address"
//                         autocomplete='false' id='Email' aria-required='true' aria-label='Email' name='Email'
//                         aria-valuemax='100' crmlabel='' maxlength='100'></input>
//                     <div class='zcwf_col_help'></div>
//                 </div>
//             </div>
//             <div class='zcwf_row'>
//                 <div class='zcwf_col_lab' style='font-size:14px; font-family: Arial;'><label for='Phone'><span
//                             style='color:red;'></span></label></div>
//                 <div class='zcwf_col_fld'><input type='text' id='Phone' placeholder="Phone Number" aria-required='true'
//                         aria-label='Phone' name='Phone' aria-valuemax='30' maxlength='30'></input>
//                     <div class='zcwf_col_help'></div>
//                 </div>
//             </div>
//             <div class='zcwf_row'>
//                 <div class='zcwf_col_lab'></div>
//                 <div class='zcwf_col_fld'><input type='submit' id='formsubmit' role='button'
//                         class='formsubmit zcwf_button' value='Next' aria-label='Submit' title='Submit'></div>
//             </div>
//             <script>
//                 function validateEmail6387495000000855040() {
//                     var form = document.forms['WebToLeads6387495000000855040'];
//                     var emailFld = form.querySelectorAll('[ftype=email]');
//                     var i;
//                     for (i = 0; i < emailFld.length; i++) {
//                         var emailVal = emailFld[i].value;
//                         if ((emailVal.replace(/^\s+|\s+$/g, '')).length != 0) {
//                             var atpos = emailVal.indexOf('@');
//                             var dotpos = emailVal.lastIndexOf('.');
//                             if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
//                                 alert('Please enter a valid email address. ');
//                                 emailFld[i].focus();
//                                 return false;
//                             }
//                         }
//                     }
//                     return true;
//                 }

//                 function checkMandatory6387495000000855040() {
//                     var mndFileds = new Array('Last Name', 'Email', 'Phone');
//                     var fldLangVal = new Array('Name', 'Email', 'Phone');
//                     for (i = 0; i < mndFileds.length; i++) {
//                         var fieldObj = document.forms['WebToLeads6387495000000855040'][mndFileds[i]];
//                         if (fieldObj) {
//                             if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length == 0) {
//                                 if (fieldObj.type == 'file') {
//                                     alert('Please select a file to upload.');
//                                     fieldObj.focus();
//                                     return false;
//                                 }
//                                 alert(fldLangVal[i] + ' cannot be empty.');
//                                 fieldObj.focus();
//                                 return false;
//                             } else if (fieldObj.nodeName == 'SELECT') {
//                                 if (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
//                                     alert(fldLangVal[i] + ' cannot be none.');
//                                     fieldObj.focus();
//                                     return false;
//                                 }
//                             } else if (fieldObj.type == 'checkbox') {
//                                 if (fieldObj.checked == false) {
//                                     alert('Please accept  ' + fldLangVal[i]);
//                                     fieldObj.focus();
//                                     return false;
//                                 }
//                             }
//                             try {
//                                 if (fieldObj.name == 'Last Name') {
//                                     name = fieldObj.value;
//                                 }
//                             } catch (e) { }
//                         }
//                     }
//                     if (!validateEmail6387495000000855040()) { return false; }

//                     var urlparams = new URLSearchParams(window.location.search);
//                     if (urlparams.has('service') && (urlparams.get('service') === 'smarturl')) {
//                         var webform = document.getElementById('webform6387495000000855040');
//                         var service = urlparams.get('service');
//                         var smarturlfield = document.createElement('input');
//                         smarturlfield.setAttribute('type', 'hidden');
//                         smarturlfield.setAttribute('value', service);
//                         smarturlfield.setAttribute('name', 'service');
//                         webform.appendChild(smarturlfield);
//                     }

//                     document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
//                     return true;
//                 }

//                 $(document).ready(function () {
//                     $('#webform6387495000000855040').submit(function (e) {
//                         var ismandatory = checkMandatory6387495000000855040();
//                         e.preventDefault();
//                         if (ismandatory) {
//                             if (typeof _wfa_track != 'undefined' && _wfa_track.wfa_submit) { _wfa_track.wfa_submit(e); }
//                             var formData = new FormData(this);
//                             $.ajax({
//                                 url: 'https://crm.zoho.com/crm/WebToLeadForm',
//                                 type: 'POST',
//                                 data: formData,
//                                 cache: false,
//                                 contentType: false,
//                                 processData: false,
//                                 success: function (data) {
//                                     var splashinfodom = document.getElementById('wf_splash_info');
//                                     splashinfodom.innerText = data.actionvalue;
//                                     var splashdom = document.getElementById('wf_splash');
//                                     document.getElementById('webform6387495000000855040').reset.click();
//                                     splashdom.style.display = '';
//                                     setTimeout(function () {
//                                         splashdom.style.display = 'none';
//                                     }, 5000);
//                                     document.querySelector('.crmWebToEntityForm .formsubmit').removeAttribute('disabled');
//                                 },
//                                 error: function (data) {
//                                     alert('an error occurred');
//                                 }
//                             });
//                         }
//                     });
//                 });
//                 function tooltipShow6387495000000855040(el) {
//                     var tooltip = el.nextElementSibling;
//                     var tooltipDisplay = tooltip.style.display;
//                     if (tooltipDisplay == 'none') {
//                         var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
//                         for (i = 0; i < allTooltip.length; i++) {
//                             allTooltip[i].style.display = 'none';
//                         }
//                         tooltip.style.display = 'block';
//                     } else {
//                         tooltip.style.display = 'none';
//                     }
//                 }
//             </script>
//             <!-- Do not remove this --- Analytics Tracking code starts -->
//             <script id='wf_anal'
//                 src='https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=b62909ce11e4cd6547525d5a24404fb7280055fa0b5ebe62ae612713307c99f513e08e2c25db3ccfcee156ae7b6ec498gidc7a7c33fd643c9839bd9bcf86d069f4a0c2a283f616e6c0b24351136ff5d3e79gidf278e287f264d968b9bbd7a0da44bfa4aa1276bc35fdfe6d6820d6f8dd666d6egid3741468fad6ffd924e083ee33d36b57137444d84e96f163cb42f16a6ee7876d7&tw=218e8df5eca5a00c68c18291ebc1e6c3ead96902969f23d74be1d24642ce08e8'></script>
//             <!-- Do not remove this --- Analytics Tracking code ends. -->
//         </form>
//     </div>
// </body>

// </html>
// `;
  

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
                  Check this box to receive SMS from Ramad Pay Inc. Reply "STOP" to opt out.
                   View Privacy Policy. The form won't submit without it.
                  </label>
                </div>
                {errors.agreed && <p className="error">{errors.agreed}</p>}

                <div className="hmNxtBtn" onClick={handleSubmit}>
                  <a type="submit" >Next</a>
                </div>
                  
              </form>
              {/* <iframe
          title="Dynamic Iframe"
        width="400"
        height="300"
        srcDoc={iframeContent}
        frameBorder={'0'}
      
      /> */}
              

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
