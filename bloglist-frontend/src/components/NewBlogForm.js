import React from 'react'
import InputField from './InputField'
import Notification from './Notification'
import Togglable from './Togglable'
import blogService from '../services/blogs'
import App from '../App'

class NewBlogForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            author: '',
            url: '',
            error: {
                message: '',
                className: ''
            },
            visible: false
        }
    }

    setNotification(message, errorClass) {
        this.setState({
            error: {
                message: message,
                className: errorClass
            }
        })
        setTimeout(() => {
            this.setState({
                error: {
                    message: null
                }
            })
        }, 5000)
    }

    submitNew = async (event) => {
        event.preventDefault()
        try {
            const post = await blogService.post({
                title: this.state.title,
                author: this.state.author,
                url: this.state.url
            })
            this.setState({
                title: '',
                author: '',
                url: ''
            })
            this.setNotification(`Added entry to list.`)
            this.blogForm.toggleVisibility()
        } catch (exception) {
            this.setNotification(`Couldn't add entry.`)
        }
    }

    handleFieldChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        const blogForm = () => (
            <div>
                Add a blog to list: <br />
                < form onSubmit={this.submitNew} >
                    <InputField name="title" text="Title: " type="text" value={this.state.title} onChange={this.handleFieldChange} />
                    <InputField name="author" text="Author's name: " type="text" value={this.state.author} onChange={this.handleFieldChange} />
                    <InputField name="url" text="URL: " type="text" value={this.state.url} onChange={this.handleFieldChange} />
                    <button type="submit">Submit</button>
                    <Notification message={this.state.error.message} className={this.state.error.className} />
                </form >
                <br />
            </div>
        )
        return (
            <div>
                <Togglable buttonLabel="Add entry" ref={component => this.blogForm = component}>>
                    {blogForm()}
                </Togglable>
            </div >
        )

    }
}

export default NewBlogForm;