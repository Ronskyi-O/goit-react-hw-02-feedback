import React from 'react';

export const FeedbackOptions = ({
    onIncrementGoodFeedback,
    onIncrementNeutralFeedback,
    onIncrementBadFeedback,
}) => {
    return (
        <div>
            <button type="button" onClick={onIncrementGoodFeedback}>
                Good
            </button>
            <button type="button" onClick={onIncrementNeutralFeedback}>
                Neutral
            </button>
            <button type="button" onClick={onIncrementBadFeedback}>
                Bad
            </button>
        </div>
    );
};