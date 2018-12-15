import React from 'react'
import Blog from './Blog'

const ListAll = ({ blogs }) => {
    return (
        <div>
            {blogs.map(blog =>
                <Blog key={blog.id} blog={blog} />)
            }
        </div>
    )
}

const BlogList = ({ blogs }) => {
    return (
        <div>
            <h2>Blogs:</h2>
            <ListAll blogs={blogs} />
        </div>
    )
}


export default BlogList