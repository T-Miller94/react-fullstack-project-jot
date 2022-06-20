import React, { Component } from 'react'

export default class GenreItem extends Component {
    render() {
        const genre = this.props.genre
        const handleGoToThread = () => {
            this.props.goToThread(genre)
        }

        return (
        <h3 key={this.props.index} onClick={handleGoToThread} className="genreItem" >{this.props.genre}</h3>
        )
    }
}
