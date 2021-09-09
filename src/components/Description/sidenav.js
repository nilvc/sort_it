import React, { Component } from 'react'
import './sidenav.css'
import Card from './cards'
export class Sidenav extends Component {
    render() {
        return (
            <div className="sidenav">
                <Card message="Intial state" 
                        barcolor ="aquamarine" 
                        numberofcards="4"/>
                <Card message="These bars are going to be swapped" 
                        barcolor ="red"
                        numberofcards="2"/>
                <Card message="These bars are being compared" 
                        barcolor ="green"
                        numberofcards="2"/>
                <Card message="The pivot bar in quicksort" 
                        barcolor ="blue"
                        numberofcards="1"/>
                <Card message="The sorting has been finished" 
                        barcolor ="purple"
                        numberofcards="3"/>
                <Card message="This bar found its final position" 
                        barcolor ="yellow"
                        numberofcards="1"/>
            </div>
        )
    }
}

export default Sidenav
