import i1 from '../assets/i1.jpg';
import i2 from '../assets/i2.jpg';

export default function Destination(){
    return(
        <div className="destination">
            <h1> Popular Destination </h1>
            <p>Tours give you the opportunity to see a lot, within a time frame </p>
            <div className="first-des">
                <div className="des-text">
                    <h2> Ella </h2>
                    <p>  A scenic hill town surrounded by lush tea plantations, misty mountains, and waterfalls. 
                        Enjoy the famous train ride through the hills, hike Little Adam’s Peak, 
                        or visit the Nine Arches Bridge for a picture-perfect view.
                    </p>
                    <div className="image">
                        <img alt="ella1" src={i1} />
                        <img alt="ella2" src={i2} />
                    </div>
                </div>
            </div>
        </div>
    )
}