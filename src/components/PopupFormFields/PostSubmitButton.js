import React, { Component } from 'react'

export default class PostSubmitButton extends Component {
    render() {
        let genre = this.props.thread
        let author = this.props.author
        let password = this.props.password
        let title = this.props.title
        let story = this.props.story

        const handleClick = () => {
            if(!password || !title || !story) {
                window.alert('Posts require a password, title, and a story.')
                return
            } else {
                fetch(`${this.props.url}`, {
                    method: 'Post',
                    body: JSON.stringify({
                        genre: genre,
                        author: author,
                        password: password,
                        title: title,
                        story: story
                    }),
                    headers: {
                        'Content-type' : 'application/json'
                    }
                })
                window.alert('Posted')
                this.props.closePopup()
                this.props.refresh()
            }
        }

        return (
            <button onClick={handleClick}>Submit</button>
        )
    }
}
