import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from './SimpleBlog'

describe.only('<SimpleBlog />', () => {
    it('renders content', () => {
        const blog = {
            title: 'Testit on kivoja, paitsi ei',
            author: 'Kukahan Lie',
            url: '--',
            likes: 0
        }

        const blogComponent = shallow(<SimpleBlog blog={blog} />)
        const titleDiv = blogComponent.find('.title')
        const authorDiv = blogComponent.find('.author')
        const urlDiv = blogComponent.find('.url')
        const likesDiv = blogComponent.find('.likes')

        expect(titleDiv.text()).toContain(blog.title)
        expect(authorDiv.text()).toContain(blog.author)
        expect(urlDiv.text()).toContain(blog.url)
        expect(likesDiv.text()).toContain(blog.likes)
    })

    it('clicking the button calls event handler twice', () => {
        const blog = {
            title: 'Testit on kivoja, paitsi ei',
            author: 'Kukahan Lie',
            url: '--',
            likes: 0
        }

        const mockHandler = jest.fn()

        const blogComponent = shallow(
            <SimpleBlog
                blog={blog}
                clickLike={mockHandler}
            />
        )

        const button = blogComponent.find('button')
        button.simulate('click')

        expect(mockHandler.mock.calls.length).toBe(1)
    })
})