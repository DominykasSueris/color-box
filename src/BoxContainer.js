import React, { Component } from 'react';
import Box from './Box';
import './BoxContainer.css'


class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 32,
        allColors: ['red', 'purple', 'black', 'blueviolet', 'green', 'yellow', 'chartreuse', 'cyan', 'hotpink']
    }
    render() {
        const boxes = Array.from({length: this.props.numBoxes}).map(() => <Box colors={this.props.allColors} />
        )
        return (
            <div className="container">{boxes}</div>
        )
    }
}

export default BoxContainer;