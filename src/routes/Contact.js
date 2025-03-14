import Navbar from '../components/Navbar';
import ContactImg from '../assets/5.jpg';
import Hero from '../components/Hero';
import Footer from '../components/Footer';


export default function Contact(){
    return(
        <>
            <Navbar />
            <Hero 
                cName= "hero-mid"
                heroImg= {ContactImg}
                title= "Contact"
                btnClass="hide"
            />
            <Footer />
        </>
    )
}