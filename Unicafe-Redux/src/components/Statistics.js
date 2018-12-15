import React from 'react'
import { submitReview } from './../reducers/Reducer'
import { connect } from 'react-redux'

class Statistics extends React.Component {
    /*
handleClick = (value) => {
    return () => {
        if (value > 0) {
            store.dispatch({ type: 'GOOD' })
        }
        else if (value < 0) {
            store.dispatch({ type: 'BAD' })
        }
        else {
            store.dispatch({ type: 'OK' })
        }
    }
}*/
    render() {
        const summary = () => {
            if (store.counter === 0) {
                return (
                    <div>
                        <p>No feedbacks given yet. Be first to rate your experience at UniCafe!</p>
                    </div>
                )
            }
            return (
                <Statistics state={this.store} />
            )
        }
        return (
            <div>
                <div>
                    <Button handleClick={this.handleClick(1)} text="Good" />
                    <Button handleClick={this.handleClick(0)} text="Neutral" />
                    <Button handleClick={this.handleClick(-1)} text="Bad" />
                </div>
                {summary()}
            </div >
        )
    }
}

export default connect(
    mapStateToProps, { submitReview })
    (Statistics)