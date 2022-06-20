import React, { Component } from 'react'
import EditPopup from './EditPopup'
import EditPostButton from './EditPostButton'

export default class SinglePostContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editBar: false,
            editMode: false
        }
    }

    render() {
        const makeEditBar = () => {
            this.setState({editBar:true})
        }

        const hideEditBar = () => {
            this.setState({editBar: false})
        }

        const enterEditMode = () => {
            this.setState({editMode: true})
        }

        return (
            <div className='singlePostContainer'>
                <h2 className='title'>{this.props.post.title}</h2>
                <h3 className='author'>{this.props.post.author}</h3>
                <p className='story'>{this.props.post.story}</p>
                <EditPostButton
                    post={this.props.post}
                    makeEditBar={makeEditBar}
                    hideEditBar={hideEditBar}
                    editBar={this.state.editBar}
                    enterEditMode={enterEditMode} />
                <EditPopup post={this.props.post} editMode={this.state.editMode} />
            </div>
        )
    }
}
