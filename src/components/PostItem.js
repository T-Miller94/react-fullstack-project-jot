import React, { Component } from 'react'

export default class PostItem extends Component {
    render() {
        const post = this.props.post

        const handleSetPost = () => {
            this.props.setPost(post)
        }

        return (
            <div className='post' onClick={handleSetPost}>
                <h3>{this.props.post.title}</h3>
            </div>
        )
    }
}
