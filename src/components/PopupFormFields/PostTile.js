import React, { Component } from 'react'

export default class PostTile extends Component {
    render() {
        const handleSetTitle = (e) => {
            this.props.setTitle(e.target.value)
        }

        return (
            <input type='text' placeholder='Post Title' onChange={handleSetTitle} />
        )
    }
}
