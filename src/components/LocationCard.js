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
                <div className='locationCard' onClick={this.props.returnToThread}>
                    <h2 className='locationCardText' >{this.props.thread}</h2>
                </div>
                :
                <div className='locationCard'>
                    <h2 className='locationCardText'>Home</h2>
                </div>
        )
    }
}
