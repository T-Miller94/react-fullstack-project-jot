import React, { Component } from 'react'

export default class EditPopup extends Component {
    render() {
        return (
            this.props.editMode ?
                <div className='editModePopup'>
                    You're in edit mode
                </div>
                :
                ''
        )
    }
}
