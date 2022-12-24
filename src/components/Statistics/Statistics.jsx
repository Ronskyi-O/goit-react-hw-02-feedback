import React from "react"

export const Statistics = ({ good, neutral, bad }) => {
    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = Math.round(
        (good / countTotalFeedback) * 100
    );

    return (
        <div>
            <p>Good:{good}</p>
            <p>Neutral:{neutral}</p>
            <p>Bad:{bad}</p>
            <p>Total:{countTotalFeedback}</p>
            <p>Positive feedback:{countPositiveFeedbackPercentage}%</p>
        </div>
    )
}

// export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

//     return (
//         <div>
//             <p>Good:{good}</p>
//             <p>Neutral:{neutral}</p>
//             <p>Bad:{bad}</p>
//             <p>Total:{total}</p>
//             <p>Positive feedback:{positivePercentage}%</p>
//         </div>
//     )
// }