import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const { feedbackData } = useContext(FeedbackContext);

  return !feedbackData || feedbackData.length === 0 ? (
    <h2>No Feedback Available</h2>
  ) : (
    <div className="feedback-list">
      <ul>
        <AnimatePresence>
          {feedbackData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <li key={item.id}>
                <FeedbackItem feedback={item} />
              </li>
            </motion.div>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}

// FeedbackList.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//     })
//   ),
// };

export default FeedbackList;
