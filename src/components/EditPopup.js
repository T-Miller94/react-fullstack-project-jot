import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers'
import React, { Component } from 'react'
import DeleteSubmitButton from './DeleteSubmitButton'
import EditSubmitButton from './EditSubmitButton'

export default class EditPopup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            author: null,
            title: null,
            story: null,
            password: null,
            paswordCorrect: false
        }
    }
    render() {
        const handleAuthor = (e) => {
            this.setState({author : e.target.value})
        }

        const handleTitle = (e) => {
            this.setState({title : e.target.value})
        }

        const handleStory = (e) => {
            this.setState({story : e.target.value})
        }

        const handlePassword = (e) => {
            this.setState({password : e.target.value})
        }

        return (
            this.props.editMode ?
                <div className='editModePopup'>
                    <input defaultValue={this.props.post.title} onChange={handleTitle} />
                    <input defaultValue={this.props.post.author} onChange={handleAuthor} />
                    <textarea defaultValue={this.props.post.story} onChange={handleStory} />
                    <input placeholder='Password' onChange={handlePassword} />
                    <EditSubmitButton url={this.props.url} setPost={this.props.setPost} />
                    <DeleteSubmitButton url={this.props.url} setPost={this.props.setPost} />
                </div>
                :
                ''
        )
    }
}
