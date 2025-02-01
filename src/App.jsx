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
import BlogDetails2 from './components/Blog_in_Components/BlogDetails2';
import BlogDetails3 from './components/Blog_in_Components/BlogDetails3';
import BlogDetails4 from './components/Blog_in_Components/BlogDetails4';
import BlogDetails5 from './components/Blog_in_Components/BlogDetails5';
import BlogDetails6 from './components/Blog_in_Components/BlogDetails6';
import BlogDetails7 from './components/Blog_in_Components/BlogDetails7';
import BlogDetails8 from './components/Blog_in_Components/BlogDetails8';
import BlogDetails9 from './components/Blog_in_Components/BlogDetails9';


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
        <Route path="/investor" element={<InvestorComponent/>} />
        <Route path="/partnership" element={<Partnership/>} />
        <Route path="/Teams" element={<TeamComponents/>} />
        <Route path="/Top-5-Benefits-of-Using-Text2Pay" element={<Blog_in_Components/>} />
        <Route path="/Career" element={<CareerComponent/>} />
        <Route path="/servicearea" element={<ServiceArea/>} />
        <Route path="/Compliance" element={<Compliance/>} />
        <Route path="/agent" element={<Agent/>} />
        <Route path="/p2premittance" element={<P2pRemittance/>} />
        <Route path="/products" element={<ProductComponent/>} />
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
        <Route path="/Step-by-Step-Guide" element={<BlogDetails2/>} />
        <Route path="/Security-How-Text2Pay-Ensures" element={<BlogDetails3/>} />
        <Route path="/Text2Pay-The-Future-of-Seamless" element={<BlogDetails4/>} />
        <Route path="/Real-Stories-How-Text2Pay-is-Making" element={<BlogDetails5/>} />
        <Route path="/Breaking-Down-Barriers" element={<BlogDetails6/>} />
        <Route path="/Investing-in-Remittance" element={<BlogDetails7/>} />
        <Route path="/Global-Partnerships-How-Ramad" element={<BlogDetails8/>} />
        <Route path="/Innovations-in-B2B-Digital" element={<BlogDetails9/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
