import React from 'react'
import blogService from '../services/blogs'
import PropTypes from 'prop-types'

class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            blog: props.blog
        }
    }

    toggleVisibility = () => {
        this.setState({ visible: !this.state.visible })
    }

    likeButton = async (event) => {
        console.log("tässä")
        event.preventDefault()
        try {
            console.log("yritän")
            const updatedPost = await blogService.like(this.state.blog)
            this.setState({
                blog: {
                    ...this.state.blog,
                    likes: this.state.blog.likes + 1
                }
            })
        } catch (exception) {
            console.log(`Like failed`)
        }

    }

    deleteButton = async (event) => {
        event.preventDefault()
        try {
            const updatedPost = await blogService.remove(this.state.blog)
            this.setState({
                blog: {
                    title: "Entry deleted."
                }
            })
        } catch (exception) {
            if (exception.code === 401)
                this.setState({
                    blog: {
                        title: "Entry deleted."
                    }
                })

            else console.log(exception)
        }
    }

    render() {
        const hideWhenVisible = { display: this.state.visible ? 'none' : '' }
        const showWhenVisible = { display: this.state.visible ? '' : 'none' }

        const renderBlog = () => (
            <div>
                <div className="title" style={hideWhenVisible}>
                    <div className="titlebar" onClick={this.toggleVisibility} ><b>{this.state.blog.title}</b> by {this.state.blog.author}</div><br />
                </div>
                <div className="details" style={showWhenVisible}>
                    <div onClick={this.toggleVisibility} ><b>{this.state.blog.title}</b> by {this.state.blog.author}<br />
                        <a href={this.state.blog.url}>{this.state.blog.url}</a><br />
                        {this.state.blog.likes} likes <button className="likebutton" onClick={this.likeButton}>Like</button><br />
                        Added by {this.state.blog.userId.name}<br />
                        <button onClick={this.deleteButton}>Delete</button><br />
                    </div>
                </div >
            </div>
        )

        return (
            <div>
                {renderBlog()}
            </div>
        )
    }
}
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}


export default Blog