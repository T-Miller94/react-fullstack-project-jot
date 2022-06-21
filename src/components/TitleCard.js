import React, { Component } from 'react'

export default class TitleCard extends Component {
    render() {
        return (
            <div className='titleCard' onClick={this.props.goToHome}>
                <h1 className='titleCardText' >Jot</h1>
            </div>
        )
    }
}
