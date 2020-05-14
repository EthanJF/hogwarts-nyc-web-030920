import React, { Component } from 'react'

export default class Hog extends Component {

    state = {
        displayInfo: false,
        hide: false
    }

    showDetails = () => {
        this.setState({
            displayInfo: !this.state.displayInfo
        })
    }

    hideThisPig = () => {
        this.setState({
            hide: !this.state.hide
        })
    }

    renderPigDetails = ({specialty, greased, weight } = this.props.hogData) => {
        return  <ul>
                    <li>Specialty: {specialty}</li>
                    <li>Greased: {greased ? "true" : "false"}</li>
                    <li>Weight: {weight}</li>
            </ul>

    }

    renderPigImage = (name) => {
        let pigName = name.toLowerCase().split(" ").join("_")
        let pigImage = require(`../hog-imgs/${pigName}.jpg`)
        return <img onClick={this.showDetails} src={pigImage} alt={name} />
    }
    render(){

        const { name } = this.props.hogData

        if(!this.state.hide){
            return(
                <div className="ui weight wide column card">
                    <button onClick={this.hideThisPig}>Hide This Pig!</button>
                    <h4>{name}</h4>
                    {this.renderPigImage(name)}
                    {this.state.displayInfo ? this.renderPigDetails(): ""}
                </div>
            )
        } else {
            return(
                <div className="ui weight wide column card">
                    <button onClick={this.hideThisPig}>Reveal This Pig!</button>
                </div>
            )
        }
     
    }
}