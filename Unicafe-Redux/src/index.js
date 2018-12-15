import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './App'
import Reducer from './components/reducer'

const store = createStore(Reducer)

const render = () => {
    ReactDOM.render(<App />, document.getElementById('root'))
}

render()
store.subscribe(render)