import React from 'react'
import { shallow } from 'enzyme'
import Blog from './Blog'

describe('<Blog />', () => {
    it('renders content', () => {
        const blog = {
            title: 'Testit on kivoja, paitsi ei',
            author: 'Kukahan Lie',
            url: '--',
            likes: 0,
            userId: {
                name: "Jaakko"
            }
        }

        const blogComponent = shallow(<Blog blog={blog} />)
        const titleDiv = blogComponent.find('.title')

        expect(titleDiv.text()).toContain(blog.title)
        expect(titleDiv.text()).toContain(blog.author)
    })

    it('clicking the stuff yea', () => {
        const blog = {
            title: 'Testit on kivoja, paitsi ei',
            author: 'Kukahan Lie',
            url: '--',
            likes: 0,
            userId: {
                name: "Jaakko"
            }
        }

        const mockHandler = jest.fn()

        const blogComponent = shallow(
            <Blog
                blog={blog}
                likeButton={mockHandler}
            />
        )

        const titleBar = blogComponent.find('.titlebar')
        titleBar.simulate('click')
        const detailsDiv = blogComponent.find('.details')
        expect(detailsDiv.text()).toContain(blog.url)
        expect(detailsDiv.text()).toContain(blog.likes)
        expect(detailsDiv.text()).toContain(blog.userId.name)

    })
})