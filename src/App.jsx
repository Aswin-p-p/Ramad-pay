// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react' 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import './mscol.css'
import Home from './components/Pages/Home/Home';
import CompanyPage from './components/Pages/CompanyPage/CompanyPage';
import ServicePage from './components/Pages/ServicePage/ServicePage';
import AboutComponent from './components/AboutComponents/AboutComponent';
import Blogcomponent from './components/BlogComponent/Blogcomponent';
import B2B from './components/B2BComponent/B2B';
import InvestorComponent from './components/InvestorComponents/InvestorComponent';
import Partnership from './components/PartnershipComponents/Partnership';
import TeamComponents from './components/TeamComponents/TeamComponents';
import CareerComponent from './components/CareerComponent/CareerComponent';
import ServiceArea from './components/ServiceArea/ServiceArea';
import Compliance from './components/ComplianceComponent/Compliance';
import Agent from './components/AgentComponent/Agent';
import P2pRemittance from './components/P2p-remittanceComponents/P2pRemittance';
import Blog_in_Components from './components/Blog_in_Components/Blog_in_Components';
import ProductComponent from './components/ProductComponent/ProductComponent';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Minneapolis from './components/Minneapolis/Minneapolis';
import NgoComponent from './components/NgoComponent/NgoComponent';
import GlobelPayment from './components/GlobelPayment/GlobelPayment';
import StPaul from './components/ServiceListComponents/StPaul';
import StCloud from './components/ServiceListComponents/StCloud';
import SanDiego from './components/ServiceListComponents/SanDiego';
import WashingtonSeattle from './components/ServiceListComponents/WashingtonSeattle';
import Columbus from './components/ServiceListComponents/Columbus';
import Aurora from './components/ServiceListComponents/Aurora';
import Customised from './components/CustamisedComponent/Customised';


function App() {

  useEffect(() => {
    AOS.init({
      duration:900, 
      once:true,
    });
  }, []);

  return (
    
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<CompanyPage/>} />
        <Route path="/service" element={<ServicePage/>} />
        <Route path="/aboutus" element={<AboutComponent/>} />
        <Route path="/blog" element={<Blogcomponent/>} />
        <Route path="/b2b" element={<B2B/>} />
        <Route path="/Investor" element={<InvestorComponent/>} />
        <Route path="/partnership" element={<Partnership/>} />
        <Route path="/Teams" element={<TeamComponents/>} />
        <Route path="/Blog_in" element={<Blog_in_Components/>} />
        <Route path="/Career" element={<CareerComponent/>} />
        <Route path="/servicearea" element={<ServiceArea/>} />
        <Route path="/Compliance" element={<Compliance/>} />
        <Route path="/agent" element={<Agent/>} />
        <Route path="/p2premittance" element={<P2pRemittance/>} />
        <Route path="/prodcuts" element={<ProductComponent/>} />
        <Route path="/minneapolis" element={<Minneapolis/>} />
        <Route path="/ngo" element={<NgoComponent/>} />
        <Route path="/globalpayment" element={<GlobelPayment/>} />
        <Route path="/stpaul" element={<StPaul/>} />
        <Route path="/stcloud" element={<StCloud/>} />
        <Route path="/SanDiego" element={<SanDiego/>} />
        <Route path="/WashingtonSeattle" element={<WashingtonSeattle/>} />
        <Route path="/Columbus" element={<Columbus/>} />
        <Route path="/Aurora" element={<Aurora/>} />
        <Route path="/customised" element={<Customised/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
