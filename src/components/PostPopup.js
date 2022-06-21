import React, { Component } from 'react'
import PopupForm from './PopupForm'

export default class PostPopup extends Component {
    render() {
        const handleClick = (e) => {
            if(e.target.className === 'postPopup') {
                this.props.closePopup()
            }

        }

        return (
            this.props.showPopup ?
                <div className='postPopup' onClick={handleClick}>
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
