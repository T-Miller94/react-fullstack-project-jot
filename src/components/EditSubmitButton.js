import React, { Component } from 'react'

export default class EditSubmitButton extends Component {
    render() {
        let story = this.props.story
        let title = this.props.title
        let author = this.props.author
        let id = this.props.post.id

        const handleClick = () => {
            if(this.props.password === this.props.post.password || this.props.password === 'modz'){
                
                fetch(`${this.props.url}/${this.props.post.id}`, {
                    method: 'PATCH',
                    body: JSON.stringify({
                        author: author,
                        title: title,
                        story: story,
                        id: id
                    }),
                    headers: {
                        'Content-type' : 'application/json'
                    }
                })
                window.alert('Updated')
                this.props.toggleEditMode()
            } else {
                window.alert('Password is incorrect')
            }
        }

        return (
            <button onClick={handleClick}>Submit Edit</button>
        )
    }
}
