import React, { Component } from 'react';
import  {generateColor } from './GenerateColor';
import './box.css'

class Box extends Component {
    constructor(props){
        super(props)
        this.state = {color: generateColor(this.props.colors)}
        this.handleClick = this.handleClick.bind(this)
    }
    changeColor() {
        let newColor = generateColor(this.props.colors);
        this.setState({color: newColor})
    }
    handleClick() {
        this.changeColor()
    }
    render() {
        return (
            <div className="Box" 
            style={{backgroundColor: this.state.color}}
            onClick={this.handleClick}>
            </div>
        )
    }
}


export default Box;