import React, { Component } from 'react'
import EditBar from './EditBar'

export default class EditPostButton extends Component {
    render() {
        const handleClick = () => {
            this.props.editBar ?
                this.props.hideEditBar()
                :
                this.props.makeEditBar()
        }

        return (
            <div className='editButtonBar'>
                <button className='editPost' onClick={handleClick} >Edit</button>
                <EditBar
                    editBar={this.props.editBar}
                    post={this.props.post}
                    hideEditBar={this.props.hideEditBar}
                    enterEditMode={this.props.enterEditMode} />
            </div>
            
        )
    }
}
