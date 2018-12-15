import React from 'react'

const SimpleBlog = ({ blog, clickLike }) => (
    <div className="container">
        <div className="title">
            {blog.title}
        </div>
        <div className="author">
            {blog.author}
        </div>
        <div className="url">
            {blog.url}
        </div>
        <div className="likes">
            blog has {blog.likes} likes
      <button name="button" onClick={clickLike}>like</button>
        </div>
    </div>
)

export default SimpleBlog
