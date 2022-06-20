import React, { Component } from 'react'

export default class PostSubmitButton extends Component {
    render() {
        return (
            <button onClick={this.props.closePopup}>Submit</button>
        )
    }
}
