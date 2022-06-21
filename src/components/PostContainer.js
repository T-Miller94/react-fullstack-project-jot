import React, { Component } from 'react'
import PostItem from './PostItem'

export default class PostContainer extends Component {
    render() {
        return (
            <div className='postContainer'>
                {this.props.posts.map((post, index) => {
                    return <PostItem post={post} key={index} setPost={this.props.setPost} />
                })}
            </div>
            
        )
    }
}
