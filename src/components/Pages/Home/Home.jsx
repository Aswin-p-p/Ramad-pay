import React from 'react'
import Hero from '../../HomeComponents/Hero/Hero';
import Service from '../../HomeComponents/Services/Service';
import Countries from '../../HomeComponents/Countries/Countries';
import Introduce from '../../HomeComponents/Introduce/Introduce';
import About from '../../HomeComponents/About/About'
import Feature from '../../HomeComponents/Feature/Feature';
import HomePageForm from '../../HomePageForm/HomePageForm';
function Home() {
    return (
        <>
            <Hero />
            <Service />
            <Countries />
            <Introduce /> 
            <About />
            <Feature />

            <HomePageForm/>
        </>
    )
}

export default Home