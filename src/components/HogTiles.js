import React, { Component } from 'react'
import Hog from "./Hog"

export default class HogTiles extends Component {

    hogsOnPage = () => {
        return this.props.hogs.map((eachHog, index) => {
            return <li key={index}><Hog hogData={eachHog}/></li>
        })
    }
    render(){
        return(
            <ul className="ui grid container">
                {this.hogsOnPage()}
            </ul>
        )
    }
}