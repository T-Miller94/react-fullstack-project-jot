import React, { Component } from 'react'
import Genres from './Genres';
import LocationCard from './LocationCard';
import TitleCard from './TitleCard';

export default class Home extends Component {
    render() {
        return (
            <div>
                <TitleCard goToHome={this.props.goToHome} className="titleCard" />
                <LocationCard className="locationCard" />
                <Genres goToThread={this.props.goToThread} genres={this.props.genres} className="genres" />
            </div>
        )
    }
}
