import React, { Component } from 'react'
import PopupForm from './PopupForm'

export default class PostPopup extends Component {
    render() {
        return (
            this.props.showPopup ?
                <div className='postPopup'>
                    <PopupForm closePopup={this.props.closePopup} />
                </div>
                :
                ''
        )
    }
}
