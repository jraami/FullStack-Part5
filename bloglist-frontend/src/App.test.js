import React from 'react'
import { shallow, mount } from 'enzyme'
import App from './App'

describe('<App />', () => {
    it('Will not list any blogs when logged in', () => {
        const appComponent = mount(
            <App />
        )

        const containerDiv = appComponent.find('.container')
        expect(containerDiv.text()).not.toContain("Blogs")

    })
})