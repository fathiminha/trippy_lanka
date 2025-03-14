import {Component} from 'react';
import './Destination.css';
import i1 from '../assets/i1.jpg';
import i2 from '../assets/i2.jpg';

class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="des-text">
                    <h2> {this.props.heading} </h2>
                    <p> 
                       {this.props.text}
                    </p>
                </div>
                <div className="image">
                <img alt="ella1" src={this.props.img1} />
                <img alt="ella2" src={this.props.img2} />
                </div>
            </div>
        )
    }
}
export default DestinationData;