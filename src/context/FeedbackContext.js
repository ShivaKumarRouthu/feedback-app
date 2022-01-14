import { createContext, useState, useEffect } from "react";

const FeedbackContext = new createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackData, setFeedbackData] = useState([]);
  const [editableFeedback, setEditableFeedback] = useState({
    item: {},
    editMode: false,
  });
  useEffect(() => {
    fetchFeedbacks();
  }, []);
  // Fetch Feedbacks
  const fetchFeedbacks = async () => {
    const response = await fetch("/feedback");
    setFeedbackData(await response.json());
    setIsLoading(false);
  };

  // Add New Feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();
    setFeedbackData([data, ...feedbackData]);
  };
  // Edit Feedback
  const editFeedback = (feedback) => {
    setEditableFeedback({
      item: feedback,
      editMode: true,
    });
  };
  // Update Feedback
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });
    const data = await response.json();
    setFeedbackData(
      feedbackData.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };
  // Delete Feedback
  const deleteFeedback = async (deleteid) => {
    await fetch(`/feedback/${deleteid}`, { method: "DELETE" });
    setFeedbackData(() =>
      feedbackData.filter((feedback) => feedback.id !== deleteid)
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbackData,
        editableFeedback,
        isLoading,
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
