import React, { Component } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickIncrementGoodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  onClickIncrementNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  onClickIncrementBadFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  // countTotalFeedback = () => {
  //   return this.state.good + this.state.neutral + this.state.bad
  // }

  // countPositiveFeedbackPercentage = () => {
  //   return Math.round(this.state.good / this.countTotalFeedback() * 100);
  // }

  render() {

    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = Math.round(good / countTotalFeedback * 100)

    return (
      <Container>
        <div>
          <p>Please leave your feedback</p>
          <FeedbackOptions
            onIncrementGoodFeedback={this.onClickIncrementGoodFeedback}
            onIncrementNeutralFeedback={this.onClickIncrementNeutralFeedback}
            onIncrementBadFeedback={this.onClickIncrementBadFeedback}
          />
          <p>Statistics</p>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
          // total={this.countTotalFeedback()}
          // positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </div>
      </Container>
    );
  }
}
