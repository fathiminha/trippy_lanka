import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

export default function Home(){
    return(
        <>
            <Navbar />
            <Hero 
                cName= "hero"
                heroImg= './assets/2.jpg'
                title= "Explore Lanka: A Paradise of Wonders!"
                text = "Choose Your Favourite Destination"
                buttonText= "Travel Plan"
                url='/'
                btnClass="show"
            />
            
        </>
    )
}