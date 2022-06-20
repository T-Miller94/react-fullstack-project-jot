import React, { Component } from 'react'

export default class PostPassword extends Component {
    render() {
        const handleSetPassword = (e) => {
            this.props.setPassword(e.target.value)
        }

        return (
            <input type='text' placeholder='Password for this post' onChange={handleSetPassword} />
        )
    }
}
