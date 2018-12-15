import React from 'react'
import actionFor from './actionCreators'

class App extends React.Component {
    voteHandler = (value) => (e) => {
        this.props.store.dispatch(actionFor.vote(value))
    }

    render() {
        const anecdotes = this.props.store.getState()
        return (
            <div>
                <h2>Anecdotes</h2>
                {anecdotes.map(anecdote =>
                    <div key={anecdote.id}>
                        <div>
                            {anecdote.content}
                        </div>
                        <div>
                            has {anecdote.votes}
                            <button onClick={this.voteHandler(anecdote.id)}>Vote</button>
                        </div>
                    </div>
                )}
                <h2>create new</h2>
                <form>
                    <div><input /></div>
                    <button>create</button>
                </form>
            </div>
        )
    }
}

export default App