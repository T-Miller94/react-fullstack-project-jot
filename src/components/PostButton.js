import React, { Component } from 'react'

export default class PostButton extends Component {
    render() {
        return (
        <button onClick={this.props.openPopup}>Post</button>
        )
    }
}
