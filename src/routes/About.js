import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import AboutImg from '../assets/2.jpg'
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';

export default function About(){
    return(
        <>
            <Navbar />
            <Hero 
                cName= "hero-mid"
                heroImg= {AboutImg}
                title= "About"
                btnClass="hide"
            />
            <AboutUs />
            <Footer />
        </>

    )
}