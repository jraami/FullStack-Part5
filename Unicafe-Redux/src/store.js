
import { createStore } from 'redux'
import Reducer from './components/reducer'

const reducer = Reducer

const store = createStore(
    reducer
)

export default store