import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import HomeImg from '../assets/4.jpg'
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Footer from '../components/Footer';

export default function Home(){
    return(
        <>
            <Navbar />
            <Hero 
                cName= "hero"
                heroImg= {HomeImg}
                title= "Explore Lanka: A Paradise of Wonders!"
                text = "Choose Your Favourite Destination"
                buttonText= "Travel Plan"
                url='/'
                btnClass="show"
            />
            <Destination />
            <Trip />
            <Footer />
            
        </>
    )
}