import Navbar from '../components/Navbar';
import ServiceImg from '../assets/7.jpg';
import Hero from '../components/Hero';

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
        </>
    )
}