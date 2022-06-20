import React, { Component } from 'react'
import GenreItem from './GenreItem'

export default class Genres extends Component {
    render() {
        return (
            this.props.genres.map((genre, index) => {
                return <GenreItem goToThread={this.props.goToThread} genre={genre} key={index} />
            })
        )
    }
}
