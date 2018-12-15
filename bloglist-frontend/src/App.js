import React from 'react'
import Notification from './components/Notification'
import InputField from './components/InputField'
import Bloglist from './components/BlogList'
import NewBlogForm from './components/NewBlogForm'
import loginService from './services/login'
import blogService from './services/blogs'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            blogs: [],
            user: null,
            username: "",
            password: "",
            error: {
                message: "",
                className: ""
            },
            loggedIn: false
        }
    }

    componentDidMount() {
        console.log("didmount funct")
        blogService.getAll().then(blogs => {
            blogs.sort((a, b) => {
                if (a.likes < b.likes) return 1
                if (a.likes > b.likes) return -1
                return 0
            })
            this.setState({ blogs })
        })
        const loggedUserJSON = window.localStorage.getItem('BlogUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            if (!user) return
            this.setState({ user })
            blogService.setToken(user.token)
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
                    message: null,
                    className: null
                }
            })
        }, 5000)
    }

    login = async (event) => {
        console.log("login funct")
        event.preventDefault()
        try {
            const user = await loginService.login({
                username: this.state.username,
                password: this.state.password,
            })
            this.setState({
                username: '',
                password: '',
                user,
                loggedIn: true,
            })
            this.setNotification('Login successful', 'notificationSuccess')
            blogService.setToken(user.token)
            window.localStorage.setItem('BlogUser', JSON.stringify(user))
        } catch (exception) {
            this.setNotification('Username or password wrong', 'notificationError')
        }
    }


    logout = async (event) => {
        console.log("logout funct")
        event.preventDefault()
        this.setState({
            user: null,
            loggedIn: false
        })
        try {
            await loginService.logout()
            localStorage.setItem("BlogUser", null)
        }
        catch (exception) {
            console.log(exception)
        }
    }

    handleFieldChange = (event) => this.setState({ [event.target.name]: event.target.value })

    handleNumberChange = (event) => this.setState({ newNumber: event.target.value })
    render() {
        const logoutForm = () => (
            <div>
                {this.state.user.name} logged in.
                    <button onClick={this.logout}>Logout</button>
                <div className="bloglist">
                    <Bloglist blogs={this.state.blogs} />
                </div>
            </div>
        )
        const loginForm = () => (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.login}>
                    <InputField name="username" text="Username: " type="text" value={this.state.username} onChange={this.handleFieldChange} />
                    <InputField name="password" text="Password: " type="password" value={this.state.password} onChange={this.handleFieldChange} />
                    <button type="submit">Submit</button>
                    <Notification message={this.state.error.message} className={this.state.error.className} />
                </form>
            </div>
        )
        return (
            <div className="container">
                {this.state.user === null ?
                    loginForm() :
                    logoutForm()
                }
                {this.state.user !== null ? (<NewBlogForm />) : (<div>Login to enter new blog entries</div>)}
            </div>
        )
    }
}

export default App;
