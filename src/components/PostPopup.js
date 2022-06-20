import React, { Component } from 'react'
import PopupForm from './PopupForm'

export default class PostPopup extends Component {
    render() {
        return (
            this.props.showPopup ?
                <div className='postPopup'>
                    <PopupForm
                        thread={this.props.thread}
                        url={this.props.url}
                        closePopup={this.props.closePopup}
                        refresh={this.props.refresh} />
                </div>
                :
                ''
        )
    }
}
