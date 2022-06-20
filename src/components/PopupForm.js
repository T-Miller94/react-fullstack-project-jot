import React, { Component } from 'react'
import PostAuthor from './PopupFormFields/PostAuthor'
import PostPassword from './PopupFormFields/PostPassword'
import PostSubmitButton from './PopupFormFields/PostSubmitButton'
import PostText from './PopupFormFields/PostText'
import PostTile from './PopupFormFields/PostTile'

export default class PopupForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            author: 'Anonymous',
            password: null,
            title: null,
            story: null
        }
    }

    render() {
        const setAuthor = (author) => {
            this.setState({author: author})
        }

        const setPassword = (password) => {
            this.setState({password: password})
        }

        const setTitle = (title) => {
            this.setState({title: title})
        }

        const setStory = (story) => {
            this.setState({story: story})
        }

        return (
            <div className='popupForm'>
                <PostAuthor setAuthor={setAuthor} />
                <PostPassword setPassword={setPassword} />
                <PostTile setTitle={setTitle} />
                <PostText setStory={setStory} />
                <PostSubmitButton
                    thread={this.props.thread}
                    url={this.props.url}
                    closePopup={this.props.closePopup}
                    refresh={this.props.refresh}
                    author={this.state.author}
                    password={this.state.password}
                    title={this.state.title}
                    story={this.state.story} />
            </div>
        )
    }
}
