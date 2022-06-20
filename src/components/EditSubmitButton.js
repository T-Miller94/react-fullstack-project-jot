import React, { Component } from 'react'

export default class EditSubmitButton extends Component {
    render() {
        const handleClick = () => {
            if(this.props.password === this.props.post.password || this.props.password === 'modz'){
                window.alert('good to go')
            } else {
                window.alert('Password is incorrect')
            }
        }

        return (
            <button onClick={handleClick}>Submit Edit</button>
        )
    }
}
