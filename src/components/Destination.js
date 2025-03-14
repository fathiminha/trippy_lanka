import './Destination.css'
import DestinationData from './DestinationData';
import i1 from '../assets/i1.jpg';
import i2 from '../assets/i2.jpg';
import i3 from '../assets/i3.jpg';
import i4 from '../assets/i4.jpg';


export default function Destination(){
    return(
        <div className="destination">
            <h1> Popular Destination </h1>
            <p>Tours give you the opportunity to see a lot, within a time frame </p>
            
            <DestinationData
                className='first-des'
                heading= "Ella"
                text =" Nestled in Sri Lanka’s lush hill country, Ella is a breathtaking destination known for its misty mountains, 
                        rolling tea plantations, and stunning waterfalls. Whether you're hiking up Little Adam’s Peak, 
                        exploring the iconic Nine Arches Bridge, or enjoying a scenic train ride through the hills, 
                        Ella offers a perfect blend of adventure and relaxation. With its cool climate, charming cafes, 
                        and mesmerizing views, 
                        it’s a must-visit paradise for nature lovers and explorers alike."
               
               img1={i1}
               img2={i2}
            />
            <DestinationData
                className='first-des-reverse'
                heading= "Mirissa – A Tropical Beach Paradise"
                text = "Located along Sri Lanka’s southern coast, Mirissa is a stunning beach destination known for its golden sands, turquoise waters, and breathtaking sunsets. It’s a haven for travelers seeking relaxation and adventure, offering exciting whale-watching tours, surfing spots, and secluded beaches. Whether you're enjoying fresh seafood by the shore, spotting dolphins in the ocean, or simply unwinding under swaying palm trees, Mirissa promises an unforgettable tropical escape."
                
                img1={i3}
                img2={i4}
            />
        </div>
        
    )
}