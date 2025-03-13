import i1 from '../assets/i1.jpg';
import i2 from '../assets/i2.jpg';
import './Destination.css'

export default function Destination(){
    return(
        <div className="destination">
            <h1> Popular Destination </h1>
            <p>Tours give you the opportunity to see a lot, within a time frame </p>
            <div className="first-des">
                <div className="des-text">
                    <h2> Ella </h2>
                    <p> 
                        Nestled in Sri Lanka’s lush hill country, <b>Ella</b> is a breathtaking destination known for its misty mountains, 
                        rolling tea plantations, and stunning waterfalls. Whether you're hiking up <b>Little Adam’s Peak</b>, 
                        exploring the iconic <b>Nine Arches Bridge</b>, or enjoying a scenic train ride through the hills, 
                        Ella offers a perfect blend of adventure and relaxation. With its cool climate, charming cafes, 
                        and mesmerizing views, 
                        it’s a must-visit paradise for nature lovers and explorers alike.
                    </p>
                </div>
                <div className="image">
                    <img alt="ella1" src={i1} />
                    <img alt="ella2" src={i2} />
                </div>
            </div>
        </div>
    )
}