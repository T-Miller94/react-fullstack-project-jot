import React, { Component } from 'react'

export default class DeleteSubmitButton extends Component {
    render() {
        const post = null

        const handleClick = () => {
            if(this.props.password === this.props.post.password || this.props.password === 'modz') {
                fetch(`${this.props.url}/${this.props.post.id}`, {
                    method: 'delete'
                })
                window.alert('Deleted')
                this.props.toggleEditMode()
                this.props.setPost(post)
                this.props.refresh()
            } else {
                window.alert('Password is incorrect')
            }
        }
        return (
            <button onClick={handleClick}>Delete</button>
        )
    }
}
