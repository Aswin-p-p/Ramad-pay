import React, { useState } from 'react'
import './Policy.css'
import PageForm from '../PageForm/PageForm'
import HomePageForm from '../HomePageForm/HomePageForm';

function Licenses() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    const faqData = [
        {
          state: "California",
          license: "2538",
          agency: {
            contact: "For inquiries, please contact:",
            name: "California Department of Financial Protection and Innovation",
            division: "Division of Financial Institutions",
            address: "2101 Arena Boulevard Sacramento, CA 95834",
            phone: "Tel: (916) 327-7585 or toll-free at (866) 275-2677",
            website: "Website: dfpi.ca.gov",
          },
          jurisdiction: "California",
          disclosures:
            "As a Ramad Pay Inc. customer, if your issue remains unresolved after contacting Ramad Pay Inc. at 1-888-611-0753 (Monday-Friday, 9:00 AM – 6:00 PM), you may reach out to the money transmitter licensing authority in your state. If you believe your dispute or complaint regarding Ramad Pay Inc.’s services has not been adequately addressed, please consider submitting a formal complaint with the appropriate authority.",
        },
        {
          state: "Colorado",
          license: "500176",
          agency: {
            contact: "For inquiries, please contact:",
            name: "Colorado Department of Regulatory Agencies",
            division: "Division of Banking",
            address: "1560 Broadway, Suite 975 Denver, CO 80202",
            phone: "Tel: (303) 894-7575",
            email: "DORABankingWebsite@state.co.us",
            website: "Website: www.dora.colorado.gov/dob",
          },
          jurisdiction: "Colorado",
          disclosures:
            "As a Ramad Pay Inc. customer, if your issue remains unresolved after contacting Ramad Pay Inc. at 1-888-611-0753 (Monday-Friday, 9:00 AM – 6:00 PM), you may reach out to the money transmitter licensing authority in your state. If you believe your dispute or complaint regarding Ramad Pay Inc.’s services has not been adequately addressed, please consider submitting a formal complaint with the appropriate authority. Customer Notice: Entities other than FDIC insured financial institutions that conduct money transmission activities in Colorado, including the sale of money orders, transfer of funds, and other instruments for the payment of money or credit, are required to be licensed by the Colorado Division of Banking pursuant to the Money Transmitters Act, Title 11, Article 110, Colorado Revised Statutes. If you have a question about or dispute with YOUR TRANSACTION – THE MONEY YOU SENT: You must contact the Money Transmitter who processed your transaction for assistance. The Division of Banking does not have access to this information.",
        },
        {
          state: "Georgia",
          license: "1139908",
          agency: {
            contact: "For inquiries, please contact:",
            name: "Georgia Dept. of Banking & Finance",
            address: "2990 Brandywine Road Suite 200 Atlanta, Georgia 30341-5565",
            phone: "Tel: (770) 986-1633 (888) 986-1633",
            website: "Website: www.dbf.georgia.gov",
          },
          jurisdiction: "Georgia",
          disclosures:
            "As a Ramad Pay Inc. customer, if your issue remains unresolved after contacting Ramad Pay Inc. at 1-888-611-0753 (Monday-Friday, 9:00 AM – 6:00 PM), you may reach out to the money transmitter licensing authority in your state. If you believe your dispute or complaint regarding Ramad Pay Inc.’s services has not been adequately addressed, please consider submitting a formal complaint with the appropriate authority.",
        },
        {
          state: "Illinois",
          license: "MT.0000139",
          agency: {
            contact: "For inquiries, please contact:",
            name: "Illinois Department of Financial and Professional Regulation",
            address: "320 West Washington Street, 3rd Floor, Springfield, IL 62786",
            phone: "Tel: 1 (888) 473-4858",
            tty: "TTY/TDD: 1 (866) 325-4949",
            website: "Website: www.idfpr.com",
          },
          jurisdiction: "Illinois",
          disclosures:
            "As a Ramad Pay Inc. customer, if your issue remains unresolved after contacting Ramad Pay Inc. at 1-888-611-0753 (Monday-Friday, 9:00 AM – 6:00 PM), you may reach out to the money transmitter licensing authority in your state. If you believe your dispute or complaint regarding Ramad Pay Inc.’s services has not been adequately addressed, please consider submitting a formal complaint with the appropriate authority.",
        },
        {
          state: "Indiana",
          license: "69388",
          agency: {
            contact: "For inquiries, please contact:",
            name: "Indiana Dept. of Financial Institutions",
            address: "30 South Meridian Street, Suite 200 Indianapolis, Indiana 46204",
            phone: "Tel: (317) 232-3955 or 800-382-4880",
            email: "dfilicensing@dfi.in.gov",
            website: "Website: www.in.gov/dfi",
          },
          jurisdiction: "Indiana",
          disclosures:
            "As a Ramad Pay Inc. customer, if your issue remains unresolved after contacting Ramad Pay Inc. at 1-888-611-0753 (Monday-Friday, 9:00 AM – 6:00 PM), you may reach out to the money transmitter licensing authority in your state. If you believe your dispute or complaint regarding Ramad Pay Inc.’s services has not been adequately addressed, please consider submitting a formal complaint with the appropriate authority.",
        },
        {
          state: "Maine",
          license: "None",
          agency: {
            contact: "For inquiries, please contact:",
            name: "Department of Professional & Financial Regulation",
            division: "Bureau of Financial Institutions",
            address: "36 State House Station, Augusta, Maine 04333-0036",
            phone: "Tel: 800-965-5235 (toll free in Maine) or 207-624-8570",
            email: "bfi.info@maine.gov",
            website: "Website: https://www.maine.gov/pfr/financialinstitutions/",
          },
          jurisdiction: "Maine",
          disclosures:
            "As a Ramad Pay Inc. customer, if your issue remains unresolved after contacting Ramad Pay Inc. at 1-888-611-0753 (Monday-Friday, 9:00 AM – 6:00 PM), you may reach out to the money transmitter licensing authority in your state. If you believe your dispute or complaint regarding Ramad Pay Inc.’s services has not been adequately addressed, please consider submitting a formal complaint with the appropriate authority.",
        },
        {
          state: "Minnesota",
          license: "MN-MT-52045",
          agency: {
            contact: "For inquiries, please contact:",
            name: "Minnesota Department of Commerce",
            address: "85 7th Pl E # 280, St Paul, MN 55101",
            phone: "Tel: 651-539-1600 or 800-657-3602",
            website: "Website: https://mn.gov/commerce/consumer/file-a-complaint/",
          },
          jurisdiction: "Minnesota",
          disclosures:
            "As a Ramad Pay Inc. customer, if your issue remains unresolved after contacting Ramad Pay Inc. at 1-888-611-0753 (Monday-Friday, 9:00 AM – 6:00 PM), you may reach out to the money transmitter licensing authority in your state. If you believe your dispute or complaint regarding Ramad Pay Inc.’s services has not been adequately addressed, please consider submitting a formal complaint with the appropriate authority.",
        },
        {
          state: "Missouri",
          license: "MO-25-6684",
          agency: {
            contact: "For inquiries, please contact:",
            name: "Missouri Division of Finance",
            address: "301 W High St Room 630, Jefferson City, MO 65102",
            phone: "Tel: (573) 751-3242",
            fax: "Fax: (573) 751-9192",
            website: "Website: https://finance.mo.gov/",
          },
          jurisdiction: "Missouri",
          disclosures:
            "As a Ramad Pay Inc. customer, if your issue remains unresolved after contacting Ramad Pay Inc. at 1-888-611-0753 (Monday-Friday, 9:00 AM – 6:00 PM), you may reach out to the money transmitter licensing authority in your state. If you believe your dispute or complaint regarding Ramad Pay Inc.’s services has not been adequately addressed, please consider submitting a formal complaint with the appropriate authority.",
        },
        {
          state: "Nebraska",
          license: "MT.0000993-M",
          agency: {
            contact: "For inquiries, please contact:",
            name: "Nebraska Department of Banking & Finance",
            division: "Financial Institutions Division",
            address: "1526 K Street, Suite 300, Lincoln, NE 68508-2732",
            phone: "Tel: (402) 471-2171",
            website: "Website: https://ndbf.nebraska.gov/",
          },
          jurisdiction: "Nebraska",
          disclosures:
            "As a Ramad Pay Inc. customer, if your issue remains unresolved after contacting Ramad Pay Inc. at 1-888-611-0753 (Monday-Friday, 9:00 AM – 6:00 PM), you may reach out to the money transmitter licensing authority in your state. If you believe your dispute or complaint regarding Ramad Pay Inc.’s services has not been adequately addressed, please consider submitting a formal complaint with the appropriate authority.",
        },
        {
          state: "North Dakota",
          license: "MT101928",
          agency: {
            contact: "For inquiries, please contact:",
            name: "North Dakota Department of Financial Institutions",
            address: "1200 Memorial Highway, Bismarck, ND 58504",
            phone: "Tel: (855) 411-2372",
            website: "Website: https://www.nd.gov/dfi/",
          },
          jurisdiction: "North Dakota",
          disclosures:
            "As a Ramad Pay Inc. customer, if your issue remains unresolved after contacting Ramad Pay Inc. at 1-888-611-0753 (Monday-Friday, 9:00 AM – 6:00 PM), you may reach out to the money transmitter licensing authority in your state. If you believe your dispute or complaint regarding Ramad Pay Inc.’s services has not been adequately addressed, please consider submitting a formal complaint with the appropriate authority.",
        },
        {
          state: "South Dakota",
          license: "1139908.MT",
          agency: {
            contact: "For inquiries, please contact:",
            name: "South Dakota Department of Labor and Regulation",
            division: "Division of Banking",
            address: "1714 Lincoln Avenue, Suite 2, Pierre, SD 57501",
            phone: "Tel: 605-773-3421",
            fax: "Fax: 605-773-3460",
            website: "Website: https://dlr.sd.gov/banking/",
          },
          jurisdiction: "South Dakota",
          disclosures:
            "As a Ramad Pay Inc. customer, if your issue remains unresolved after contacting Ramad Pay Inc. at 1-888-611-0753 (Monday-Friday, 9:00 AM – 6:00 PM), you may reach out to the money transmitter licensing authority in your state. If you believe your dispute or complaint regarding Ramad Pay Inc.’s services has not been adequately addressed, please consider submitting a formal complaint with the appropriate authority.",
        },
        {
          state: "Ohio",
          license: "OHMT024",
          agency: {
            contact: "For inquiries, please contact:",
            name: "Ohio Division of Financial Institutions",
            address: "77 South High Street 21st Floor Columbus, OH 43215-6120",
            phone: "Tel: (866) 278-0003",
            website: "Website: www.com.ohio.gov/fiin",
          },
          jurisdiction: "Ohio",
          disclosures:
            "As a Ramad Pay Inc. customer, if your issue remains unresolved after contacting Ramad Pay Inc. at 1-888-611-0753 (Monday-Friday, 9:00 AM – 6:00 PM), you may reach out to the money transmitter licensing authority in your state. If you believe your dispute or complaint regarding Ramad Pay Inc.’s services has not been adequately addressed, please consider submitting a formal complaint with the appropriate authority.",
        },
        {
          state: "Tennessee",
          license: "1139908",
          agency: {
            contact: "For inquiries, please contact:",
            name: "Tennessee Department of Financial Institutions",
            address: "312 Rosa L. Parks Avenue, 26th Floor, Nashville, TN 37243",
            phone: "Tel: (615) 741-2236",
            email: "TDFI.Contact@tn.gov",
            website: "Website: https://www.tn.gov/tdfi.html",
          },
          jurisdiction: "Tennessee",
          disclosures:
            "As a Ramad Pay Inc. customer, if your issue remains unresolved after contacting Ramad Pay Inc. at 1-888-611-0753 (Monday-Friday, 9:00 AM – 6:00 PM), you may reach out to the money transmitter licensing authority in your state. If you believe your dispute or complaint regarding Ramad Pay Inc.’s services has not been adequately addressed, please consider submitting a formal complaint with the appropriate authority.",
        },
        {
          state: "Texas",
          license: "3100",
          agency: {
            contact: "For inquiries, please contact:",
            name: "Texas Department of Banking",
            division: "Non-Depository Supervision Division",
            address: "2601 N. Lamar Blvd. Austin, TX 78705-4294",
            phone: "Tel: 512-475-1300 or Toll-Free (877) 276-5554",
            fax: "Fax: (512) 475-1288",
            website: "Website: https://www.dob.texas.gov/",
          },
          jurisdiction: "Texas",
          disclosures:
            "As a Ramad Pay Inc. customer, if your issue remains unresolved after contacting Ramad Pay Inc. at 1-888-611-0753 (Monday-Friday, 9:00 AM – 6:00 PM), you may reach out to the money transmitter licensing authority in your state. If you believe your dispute or complaint regarding Ramad Pay Inc.’s services has not been adequately addressed, please consider submitting a formal complaint with the appropriate authority.",
        },
        {
          state: "Vermont",
          license: "MT-1139908",
          agency: {
            contact: "For inquiries, please contact:",
            name: "Department of Financial Regulation",
            address: "89 Main Street, Montpelier, VT 05620-3101",
            phone: "Tel: (802) 828-3301 or Toll-Free (833) 337-4685",
            website: "Website: https://dfr.vermont.gov/",
          },
          jurisdiction: "Vermont",
          disclosures:
            "As a Ramad Pay Inc. customer, if your issue remains unresolved after contacting Ramad Pay Inc. at 1-888-611-0753 (Monday-Friday, 9:00 AM – 6:00 PM), you may reach out to the money transmitter licensing authority in your state. If you believe your dispute or complaint regarding Ramad Pay Inc.’s services has not been adequately addressed, please consider submitting a formal complaint with the appropriate authority.",
        },
        {
          state: "Virginia",
          license: "MO-115",
          agency: {
            contact: "For inquiries, please contact:",
            name: "State Corporate Commission",
            division: "Bureau of Financial Institutions",
            address: "1300 E. Main St., 8th floor, Richmond, Virginia 23219",
            phone: "Tel: (804) 371-9657 or 800-552-7945 (Toll-Free)",
            fax: "Fax: (804) 371-9416",
            email: "bfiquestions@scc.virginia.gov",
            website: "Website: https://www.scc.virginia.gov/pages/Bureau-of-Financial-Institutions",
          },
          jurisdiction: "Virginia",
          disclosures:
            "As a Ramad Pay Inc. customer, if your issue remains unresolved after contacting Ramad Pay Inc. at 1-888-611-0753 (Monday-Friday, 9:00 AM – 6:00 PM), you may reach out to the money transmitter licensing authority in your state. If you believe your dispute or complaint regarding Ramad Pay Inc.’s services has not been adequately addressed, please consider submitting a formal complaint with the appropriate authority.",
        },
        {
          state: "Washington",
          license: "550-MT-145599",
          agency: {
            contact: "For inquiries, please contact:",
            name: "State of Washington – Department of Financial Institutions",
            address: "150 Israel Road, S.W., Tumwater, WA 98501",
            mailingAddress: "PO Box 41200, Olympia WA 98504-1200",
            phone: "Tel: (360) 902-8700 or Toll Free 1-877-RING DFI (746-4334)",
            website: "Website: https://dfi.wa.gov/",
          },
          jurisdiction: "Washington",
          disclosures:
            "As a Ramad Pay Inc. customer, if your issue remains unresolved after contacting Ramad Pay Inc. at 1-888-611-0753 (Monday-Friday, 9:00 AM – 6:00 PM), you may reach out to the money transmitter licensing authority in your state. If you believe your dispute or complaint regarding Ramad Pay Inc.’s services has not been adequately addressed, please consider submitting a formal complaint with the appropriate authority.",
        },
        {
          state: "Wisconsin",
          license: "148-SOC",
          agency: {
            contact: "For inquiries, please contact:",
            name: "Wisconsin Department of Financial Institutions",
            address: "4822 Madison Yards Way, North Tower",
            mailingAddress: "Madison, WI 53705",
            phone: "Tel: (608) 261-7578",
            website: "Website: https://dfi.wi.gov/",
          },
          jurisdiction: "Wisconsin",
          disclosures:
            "As a Ramad Pay Inc. customer, if your issue remains unresolved after contacting Ramad Pay Inc. at 1-888-611-0753 (Monday-Friday, 9:00 AM – 6:00 PM), you may reach out to the money transmitter licensing authority in your state. If you believe your dispute or complaint regarding Ramad Pay Inc.’s services has not been adequately addressed, please consider submitting a formal complaint with the appropriate authority.",
        },
        {
          state: "North Caroline",
          license: "NC 27603",
          agency: {
            contact: "For inquiries, please contact:",
            name: "The N.C Office of the Commissioner Of Banks(NCCOB) Finance Institution",
            address: "316 W.Edenton Street,Raleight, NC 27603",
            mailingAddress: "4309 Mail Service Center,Raleight, NC 27699-4309",
            phone: "Tel: 919-733-3016",
            website: "Website: https://nccob.nc.gov/financial-institutions/money-transmitters",
          },
          jurisdiction: "North Caroline",
          disclosures:
            "As a Ramad Pay Inc. customer, if your issue remains unresolved after contacting Ramad Pay Inc. at 1-888-611-0753 (Monday-Friday, 9:00 AM – 6:00 PM), you may reach out to the money transmitter licensing authority in your state. If you believe your dispute or complaint regarding Ramad Pay Inc.’s services has not been adequately addressed, please consider submitting a formal complaint with the appropriate authority.",
        },
    ]
    return (
        <>
            <section className=" commonHro serviceInAreaHero licens-hero">
                <div className="container">
                    <div className="cmpny-content contenthead">
                        <h1 data-aos="fade-right" data-aos-duration="1000">
                            <span className="commSpn"> </span>
                            Licensing
                        </h1>
                    </div>

                </div>

            </section>

            <section className="CA-section Pri">
            <div className="container">
                <div className="pageLink">
                    <a href="">Home | Company | <span>Licences</span></a>
                </div>
               



                <div className="licns-container">
                    <div className="licRw">
                    {faqData.map((faq, index) => (
        <div className="faq-item" key={index}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <h3>{faq.state}</h3>
            <span className={`arrow ${openIndex === index ? "open" : ""}`}>
              <i className="fa-solid fa-angle-down"></i>
            </span>
          </div>
          <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
            <div className="LcnsCnt">
              <div className="LcnHead">
                <p>License:</p>
              </div>
              <div className="LcnTxt">
                <p>{faq.license}</p>
              </div>
            </div>
            <div className="LcnsCnt">
              <div className="LcnHead">
                <p>Agency:</p>
              </div>
              <div className="LcnTxt">
                <span>{faq.agency.contact}</span>
                <p>{faq.agency.name}</p>
                <p>{faq.agency.division}</p>
                <div className="subCnt">
                  <p>{faq.agency.address}</p>
                  <p>{faq.agency.phone}</p>
                  <p>{faq.agency.website}</p>
                </div>
              </div>
            </div>
            <div className="LcnsCnt">
              <div className="LcnHead">
                <p>Jurisdiction:</p>
              </div>
              <div className="LcnTxt">
                <p>{faq.jurisdiction}</p>
              </div>
            </div>
            <div className="LcnsCnt">
              <div className="LcnHead">
                <p>Disclosures:</p>
              </div>
              <div className="LcnTxt">
                <p>{faq.disclosures}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
                    </div>
                </div>
          </div>
        </section>


                   {/* <PageForm/> */}
                   <HomePageForm/>
        </>
    )
}

export default Licenses