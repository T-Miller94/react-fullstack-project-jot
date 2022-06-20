import React, { Component } from 'react'

export default class LocationCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: 'Home'
        }
    }

    render() {
        return (
            this.props.thread ?
                <h2 className='locationCard' onClick={this.props.returnToThread}>{this.props.thread}</h2>
                :
                <h2 className='locationCard'>Home</h2>
        )
    }
}
