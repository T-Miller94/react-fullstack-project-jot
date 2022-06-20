import React, { Component } from 'react'
import EditPostButton from './EditPostButton'

export default class SinglePostContainer extends Component {
    render() {
        return (
            <div className='singlePostContainer'>
                <h2 className='title'>{this.props.post.title}</h2>
                <h3 className='author'>{this.props.post.author}</h3>
                <p className='story'>{this.props.post.story}</p>
                <EditPostButton />
            </div>
        )
    }
}
