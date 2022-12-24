import React from 'react';
import PropTypes from 'prop-types'

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

FeedbackOptions.protoTypes = {
    onIncrementGoodFeedback: PropTypes.func.isRequired,
    onIncrementNeutralFeedback: PropTypes.func.isRequired,
    onIncrementBadFeedback: PropTypes.func.isRequired,
}
