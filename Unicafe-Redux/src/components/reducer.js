const initialState = {
    good: 0,
    ok: 0,
    bad: 0,
    average: 0,
    percentage: 0,
    counter: 0
}

const average = (data) => (data.good - data.bad) / data.counter
const percentage = (data) => (data.good / data.counter) * 100

const Reducer = (state = initialState, action) => {
    console.log(action.data)
    switch (action.type) {
        case 'GOOD': {
            const newData = {
                ...state,
                good: state.good + 1,
                counter: state.counter + 1,
            }
            newData.average = average(newData)
            newData.percentage = percentage(newData)
            return newData
        }
        case 'OK': {
            const newData = {
                ...state,
                ok: state.ok + 1,
                counter: state.counter + 1,
            }
            newData.average = average(newData)
            newData.percentage = percentage(newData)
            return newData
        }
        case 'BAD': {
            const newData = {
                ...state,
                bad: state.bad + 1,
                counter: state.counter + 1,
            }
            newData.average = average(newData)
            newData.percentage = percentage(newData)
            return newData
        }
        case 'ZERO':
            return 0
    }
    return state
}

export const submitReview = (value) => {
    return async (dispatch) => {
        if (value > 0) {
            dispatch({ type: 'GOOD' })
        }
        else if (value < 0) {
            dispatch({ type: 'BAD' })
        }
        else {
            dispatch({ type: 'OK' })
        }
    }
}

export default Reducer
