import React, { Component } from 'react'
import Genres from './Genres';
import LocationCard from './LocationCard';
import TitleCard from './TitleCard';

export default class Home extends Component {
    render() {
        return (
            <div className='home' >
                <TitleCard goToHome={this.props.goToHome} className="titleCard" />
                <LocationCard className="locationCard" />
                <div className="genres">
                    <Genres goToThread={this.props.goToThread} genres={this.props.genres} />
                </div>
            </div>
        )
    }
}
