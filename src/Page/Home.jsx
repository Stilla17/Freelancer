import React from 'react'
import TopSkils from '../Components/Top_Skils/TopSkils'
import Header from '../Components/Header/Header'
import Greatworks from '../Components/Greatworks/Greatworks'
import UPTech from '../Components/UPTech/UPTech'
import AboutUs from '../Components/Talk about us/AboutUs'
import Footer from '../Components/Footer/Footer'
const Home = () => {
    return (
        <>
            <Header />
            <main>
                <section>
                    <TopSkils />
                </section>
                <section>
                    <Greatworks />
                </section>
                <section>
                    <UPTech />
                </section>
                <section>
                    <AboutUs />
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Home