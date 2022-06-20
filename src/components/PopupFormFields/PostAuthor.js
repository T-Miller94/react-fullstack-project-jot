import React, { Component } from 'react'

export default class PostAuthor extends Component {
    render() {
        const handleSetAuthor = (e) => {
            this.props.setAuthor(e.target.value || 'anonymous')
        }

        return (
            <input type='text' placeholder='Pen-Name' onChange={handleSetAuthor} />
        )
    }
}
