import React, { Component } from 'react'

export default class TitleCard extends Component {
    render() {
        return (
        <h1 className='titleCard' onClick={this.props.goToHome} >Jot</h1>
        )
    }
}
