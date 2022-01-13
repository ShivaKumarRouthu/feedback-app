import {useContext} from 'react';

import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const { feedbackData } = useContext(FeedbackContext);
  let average = feedbackData.reduce((acc, curr) => {
    return acc + curr.rating;
  }, 0);
  average = average / feedbackData.length;
  average = average.toFixed(1).replace(/[,.]0$/, '');

  return (
    <div className="feedback-stats">
      <h4>{feedbackData.length} Reviews</h4>
      <h4>Average: {isNaN(average)? '': average}</h4>
    </div>
  )
}

export default FeedbackStats
