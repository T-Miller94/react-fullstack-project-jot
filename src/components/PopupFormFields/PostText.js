import React, { Component } from 'react'

export default class PostText extends Component {
    render() {
        const handleSetStory = (e) => {
            this.props.setStory(e.target.value)
        }

        return (
            <textarea className='postText' placeholder='Your story here...' onChange={handleSetStory} />
        )
    }
}
