import React, { Component } from 'react'
import LocationCard from './LocationCard'
import SinglePostContainer from './SinglePostContainer'
import TitleCard from './TitleCard'

export default class SinglePost extends Component {
    render() {
        return (
            <div className='singlePost'>
                <TitleCard goToHome={this.props.goToHome} />
                <LocationCard thread={this.props.thread} returnToThread={this.props.returnToThread} />
                <SinglePostContainer post={this.props.post} url={this.props.url} setPost={this.props.setPost} />
            </div>
        )
    }
}
