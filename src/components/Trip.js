import './Trip.css';
import TripData from './TripData';
import t1 from '../assets/t1.jpg';
import t2 from '../assets/t2.jpg';
import t3 from '../assets/t3.jpg';

export default function Trip(){
    return(
        <div className='trip'>
            <h1> Recent Trips </h1>
            <p> You can discover unique destinations using Google Maps</p>
            <div className="tripcard">
                <TripData 
                    image={t1}
                    heading = "Sigiriya"
                    text ="Rising dramatically from the heart of Sri Lanka, Sigiriya is an ancient rock fortress and a UNESCO World Heritage Site. Known as the 'Eighth Wonder of the World,' it boasts breathtaking frescoes, beautifully landscaped gardens, and panoramic views from the summit. Built by King Kashyapa in the 5th century, this architectural marvel is a must-visit for history lovers and adventure seekers alike."
                />
                <TripData 
                    image={t3}
                    heading = "Kandy"
                    text = "Nestled in the central hills, Kandy is a vibrant city rich in history, culture, and natural beauty. Home to the sacred Temple of the Tooth Relic, this UNESCO-listed city is a spiritual hub for Buddhists. Surrounded by lush greenery and the scenic Kandy Lake, it offers a perfect blend of tradition, breathtaking landscapes, and colonial charm. Visitors can also explore the Royal Botanical Gardens in Peradeniya or witness the colorful Esala Perahera festival, making Kandy a truly unforgettable destination."
                />
                <TripData 
                    image={t2}
                    heading = "Yala National Park"
                    text ="Yala National Park is Sri Lanka’s most famous wildlife sanctuary, known for its rich biodiversity and incredible safari experiences. Home to the world’s highest density of leopards, along with elephants, sloth bears, crocodiles, and exotic birds, Yala offers a thrilling glimpse into the island’s diverse wildlife. The park’s mix of lush forests, grasslands, and lagoons creates a stunning natural landscape for adventure seekers. Whether you're on a jeep safari or capturing breathtaking sunsets over the wilderness, Yala promises an unforgettable encounter with nature."
                />
            </div>
        </div>
    )
}