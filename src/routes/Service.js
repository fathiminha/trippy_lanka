import Navbar from '../components/Navbar';
import ServiceImg from '../assets/7.jpg';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Trip from '../components/Trip';

export default function Service(){
    return(
        <>
            <Navbar />
            <Hero 
                cName= "hero-mid"
                heroImg= {ServiceImg}
                title= "Service"
                btnClass="hide"
            />
            <Trip />
            <Footer />
        </>
    )
}