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
        const { good } = this.state;
        const { neutral } = this.state;
        const { bad } = this.state;

        const countTotalFeedback = good + neutral + bad;
        const countPositiveFeedbackPercentage = Math.round(good / countTotalFeedback * 100)

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
                    <p>Good:{good}</p>
                    <p>Neutral:{neutral}</p>
                    <p>Bad:{bad}</p>
                    <p>Total:{countTotalFeedback}</p>
                    <p>Positive feedback:{countPositiveFeedbackPercentage}%</p>
                </div>
            </div>
        )
    }
}