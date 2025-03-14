import './Destination.css'
import DestinationData from './DestinationData';
import i1 from '../assets/i1.jpg';
import i2 from '../assets/i2.jpg';


export default function Destination(){
    return(
        <div className="destination">
            <h1> Popular Destination </h1>
            <p>Tours give you the opportunity to see a lot, within a time frame </p>
            
            <DestinationData
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
        </div>
        
    )
}