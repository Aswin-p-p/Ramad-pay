import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/images/logo.png';
import callicon from '../../assets/images/heroImages/call-icon.png';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [openServiceArea, setOpenServiceArea] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const toggleServiceArea = () => {
    setOpenServiceArea(!openServiceArea);
  };


  return (
    <div>
      <header>
        <div className={`hdr-contain ${isScrolled ? 'scrolled' : ''}`}>
          <div className="container">
            <div className="hdrrow">
              <div className="logo">
                <a href="/">
                  <img src={logo} alt="Ramad Pay" />
                </a>
              </div>
              <div className={`menuSec ${isMenuOpen ? 'show' : ''}`}>
              <div className="togglerlogo">
                   <img src="assets/logotoggler.png" alt="" />
                     </div>
              <div className="mainMenu">
      <ul className="mainUl">
        
        <li><a href="/prodcuts">Product</a></li>
        <li className={`hasSub ${openSubMenu === 0 ? 'open' : ''}`}>
          <a href="/service" >
            Services <span className="dropdown-arrow" onClick={(e) => { e.preventDefault(); toggleSubMenu(0); }}></span>
          </a>
          <ul className="subMenu" style={{ display: openSubMenu === 0 ? 'block' : 'none' }}>
            <li><a href="/p2premittance">P2P Remittance Service</a></li>
            <li><a href="/ngo">NGOs</a></li>
            <li><a href="/customised">Customized RamadPay App</a></li>
            <li><a href="/b2b">Digital Payments for B2B</a></li>
            <li><a href="/globalpayment">Global Payment</a></li>
          </ul>
        </li>
        <li><a href="/agent">Text2Pay Service Agents</a></li>
        <li className={`hasSub ${openSubMenu === 1 ? 'open' : ''}`}>
          <a href="/company" >
            Company <span className="dropdown-arrow" onClick={(e) => { e.preventDefault(); toggleSubMenu(1); }}></span>
          </a>
          <ul className="subMenu" style={{ display: openSubMenu === 1 ? 'block' : 'none' }}>
            <li><a href="/aboutus">About</a></li>
            <li><a href="/Teams">The Team</a></li>
            <li><a href="/career">Careers</a></li>
            <li><a href="/Compliance">Compliance</a></li>
            <li><a href="/partnership">Partnerships</a></li>
            <li><a href="/Investor">Investor Relations</a></li>

            <li className={`serv-SubList ${openServiceArea ? 'open' : ''}`}>
  <a href="/servicearea">
    Our Service Area
    <span
      className="angle-right"
      onClick={(e) => {
        e.preventDefault(); // Prevent default only for the span click.
        toggleServiceArea();
      }}
    >
      <i className="fa-solid fa-angle-right"></i>
    </span>
  </a>
  <ul className="serv-subMenu" style={{ display: openServiceArea ? 'block' : 'none' }}>
    <li><a href="/minneapolis">Minneapolis, MN</a></li>
    <li><a href="/stpaul">St. Paul, MN</a></li>
    <li><a href="/stcloud">St. Cloud, MN</a></li>
    <li><a href="/Aurora">Aurora, CO</a></li>
    <li><a href="/Columbus">Columbus, OH</a></li>
    <li><a href="/WashingtonSeattle">Seattle, WA</a></li>
    <li><a href="/SanDiego">San Diego</a></li>
  </ul>
</li>

          </ul>
        </li>
        <li><a href="/blog">Blog/News</a></li>
      </ul>
    </div>
              </div>
              <div className="fnd-btn">
                <div className="button">
                  <a href="/agent">Find an agent</a>
                </div>
                <div className="call-icon">
                  <a href="#">
                    <img src={callicon} alt="" />
                  </a>
                </div>
              </div>
              <div className={`toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
