import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'
import {useContext} from 'react';

import Card from '../shared/Card';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ feedback }) {
  const {editFeedback, deleteFeedback} = useContext(FeedbackContext);
  return (
    <Card theme='light'>
      <div className="num-display">{feedback.rating}</div>
      <button className='close' onClick={() => deleteFeedback(feedback.id)}><FaTimes color='purple'/></button>
      <button className='edit' onClick={() => editFeedback(feedback)}><FaEdit color='purple'/></button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  feedback: PropTypes.object.isRequired
}


export default FeedbackItem
