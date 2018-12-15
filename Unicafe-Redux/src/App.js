import React, { Component } from 'react';
import './App.css';

const Button = ({ handleClick, text }) => (
    <div>
        <button onClick={handleClick}>{text}</button>
    </div>
)

const Statistics = (state) => (
    <div>
        <table>
            <tbody>
                <Statistic text="Good" value={state.state.good} />
                <Statistic text="Neutral" value={state.state.neutral} />
                <Statistic text="Bad" value={state.state.bad} />
                <Statistic text="Average" value={state.state.average} />
                <Statistic text="Positive %" value={state.state.percentage} />
            </tbody>
        </table>
    </div>
)

const Statistic = ({ text, value }) => (
    <tr>
        <th>{text}: </th>
        <th>{value.toFixed(2)}</th>
    </tr>

)

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,
            average: 0,
            percentage: 0
        }
    }

    handleClick = (value) => {
        return () => {

            if (value > 0) {
                this.setState({
                    good: this.state.good + 1
                })
            }
            else if (value < 0) {
                this.setState({
                    bad: this.state.bad + 1
                })
            }
            else {
                this.setState({
                    neutral: this.state.neutral + 1
                })
            }
            const counter = this.state.good + this.state.neutral + this.state.bad
            if (counter > 0) {
                this.setState({
                    average: (this.state.good - this.state.bad) / counter
                })
                this.setState({
                    percentage: (this.state.good / counter) * 100
                })
            }

        }

    }

    render() {
        const summary = () => {
            if (this.state.counter === 0) {
                return (
                    <div>
                        <p>No feedbacks given yet. Be first to rate your experience at UniCafe!</p>
                    </div>
                )
            }
            return (
                <Statistics state={this.state} />
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
            </div>
        )
    }
}


export default App;
