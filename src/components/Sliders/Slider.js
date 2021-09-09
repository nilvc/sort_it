import React, { Component } from 'react'
import "./Slider.css"


export class Slider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             speed:"50",
             size:"20"
        }
    }
    
    onChangespeed = (e) => {
        
        const val = e.target.value;
        // console.log("done",val);
        this.setState({speed:val})
        this.props.updatespeed(parseInt(val));
    }

    onChangeszie = (e) => {
        
        const val = e.target.value;
        // console.log("done",val);
        this.setState({size:val})
        this.props.updatesize(parseInt(val));
    }


    render() {
        return (
            <div className="slider-container" >
                <div className="range-slider1">
                    <span><b>Select speed of animations</b></span>
                    <input onChange = {this.onChangespeed} 
                    className="range-slider__range" 
                    type="range" value={`${this.state.speed}`} min="5" max="500"
                    name ="speed"/>
                    <span className="range-slider__value">{`${this.state.speed}milliseconds`}</span>
                    
                </div>
                <div className="range-slider2">
                    <span><b>Select size of array </b></span>
                    <input onChange = {this.onChangeszie} 
                    className="range-slider__range" 
                    type="range" value={`${this.state.size}`} min="5" max="50"
                    name ="size"/>
                    <span className="range-slider__value">{`${this.state.size} bars`}</span>
                </div>
            </div>
        )
    }
}

export default Slider


