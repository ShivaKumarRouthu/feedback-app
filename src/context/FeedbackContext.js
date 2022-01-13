import { createContext, useState } from "react";
import FeedbackData from "../data/feedbacData";

const FeedbackContext = new createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbackData, setFeedbackData] = useState(FeedbackData);
  const [editableFeedback, setEditableFeedback] = useState({
    item: {},
    editMode: false,
  });
  // Add New Feedback
  const addFeedback = (newFeedback) => {
    setFeedbackData([newFeedback, ...feedbackData]);
  };
  // Edit Feedback
  const editFeedback = (feedback) => {
    setEditableFeedback({
      item: feedback,
      editMode: true,
    });
  };
  // Update Feedback
  const updateFeedback = (id, updItem) => {
    setFeedbackData(
      feedbackData.map((item) =>
        item.id === id ? { ...item, ...updItem } : item
      )
    );
  };
  // Delete Feedback
  const deleteFeedback = (deleteid) => {
    setFeedbackData(() =>
      feedbackData.filter((feedback) => feedback.id !== deleteid)
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbackData,
        editableFeedback,
        addFeedback,
        editFeedback,
        deleteFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
