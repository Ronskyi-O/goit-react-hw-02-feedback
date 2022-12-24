import React, { Component } from "react";

export class Feedbacks extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    onClickIncrementGoodFeedback = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
    }

    onClickIncrementNeutralFeedback = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    }

    onClickIncrementBadFeedback = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    }

    render() {
        return (
            <div>
                <p>Please leave your feedback</p>
                <div>
                    <button type='button' onClick={this.onClickIncrementGoodFeedback}>Good</button>
                    <button type='button' onClick={this.onClickIncrementNeutralFeedback}>Neutral</button>
                    <button type='button' onClick={this.onClickIncrementBadFeedback}>Bad</button>
                </div>
                <p>Statistics</p>
                <div>
                    <p>Good:{this.state.good}</p>
                    <p>Neutral:{this.state.neutral}</p>
                    <p>Bad:{this.state.bad}</p>
                </div>
            </div>
        )
    }
}