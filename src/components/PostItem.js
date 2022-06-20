import React, { Component } from 'react'

export default class PostItem extends Component {
    render() {
        const post = this.props.post

        const handleSetPost = () => {
            this.props.setPost(post)
        }

        return (
            <div className='post' onClick={handleSetPost}>{this.props.post.title}</div>
        )
    }
}
