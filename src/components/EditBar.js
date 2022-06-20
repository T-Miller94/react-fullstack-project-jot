import React, { Component } from 'react'
import EditPopup from './EditPopup'

export default class EditBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            enteredPassword: null
        }
    }
    render() {
        const password = this.props.post.password

        const handleChange = (e) => {
            this.setState({enteredPassword: e.target.value})
        }

        const handleSubmit = (e) => {
            if(e.key === 'Enter') {
                if(password === this.state.enteredPassword || this.state.enteredPassword === 'modz') {
                    this.props.hideEditBar()
                    this.props.enterEditMode()
                } else {
                    window.alert('Password is incorrect')
                }
            }
        }

        return (
            this.props.editBar ?
                <input
                    className='editBarPassword'
                    placeholder='Post Password'
                    type='password'
                    onKeyDown={handleSubmit}
                    onChange={handleChange}
                />
                :
                ''
        )
    }
}
