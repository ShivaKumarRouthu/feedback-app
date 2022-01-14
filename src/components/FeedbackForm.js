import { useState, useContext, useEffect } from "react";

import Card from "../shared/Card";
import Button from "../shared/Button";
import RatingSelect from "./RatingSelect";

import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const [review, setReview] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [feedbackRating, setFeedbackRating] = useState(10);

  const { addFeedback, editableFeedback, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (editableFeedback.editMode) {
      setFeedbackRating(editableFeedback.item.rating);
      setReview(editableFeedback.item.text);
      setBtnDisabled(false);
    }
  }, [editableFeedback]);

  const handleOnchange = (e) => {
    let reviewMsg = e.target.value;

    if (reviewMsg === "") {
      setBtnDisabled(true);
      setErrorMessage("");
    } else if (reviewMsg.length < 10) {
      setBtnDisabled(true);
      setErrorMessage("Review must be atleaset 10 characters");
    } else {
      setBtnDisabled(false);
      setErrorMessage("");
    }

    setReview(reviewMsg);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let finalFeedbackObj = {
      text: review,
      rating: feedbackRating,
    };
    if (review && review.trim().length >= 10) {
      if (editableFeedback.editMode) {
        updateFeedback(editableFeedback.item.id, finalFeedbackObj);
      } else {
        addFeedback(finalFeedbackObj);
      }
    }
    setReview("");
    setBtnDisabled(true);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect
          selectedRatingHandler={(rating) => setFeedbackRating(rating)}
        />
        <div className="input-group">
          <input
            type="text"
            value={review}
            onChange={handleOnchange}
            placeholder="Write a review"
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {errorMessage && <div className="message">{errorMessage}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
