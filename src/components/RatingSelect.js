import PropTypes from "prop-types";
import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

function RatingSelect({ selectedRatingHandler }) {
  const [selectedRating, setSelectedRating] = useState("10");
  const { editableFeedback } = useContext(FeedbackContext);

  useEffect(() => {
    if (editableFeedback.editMode) {
      setSelectedRating(editableFeedback.item.rating.toString());
    }
  }, [editableFeedback]);

  const handleChange = (e) => {
    setSelectedRating(e.currentTarget.value);
    selectedRatingHandler(+e.currentTarget.value);
  };

  return (
    <div>
      <ul className="rating">
        <li>
          <input
            type="radio"
            id="num1"
            value="1"
            onChange={handleChange}
            checked={selectedRating === "1"}
          />
          <label htmlFor="num1">1</label>
        </li>
        <li>
          <input
            type="radio"
            id="num2"
            value="2"
            onChange={handleChange}
            checked={selectedRating === "2"}
          />
          <label htmlFor="num2">2</label>
        </li>
        <li>
          <input
            type="radio"
            id="num3"
            value="3"
            onChange={handleChange}
            checked={selectedRating === "3"}
          />
          <label htmlFor="num3">3</label>
        </li>
        <li>
          <input
            type="radio"
            id="num4"
            value="4"
            onChange={handleChange}
            checked={selectedRating === "4"}
          />
          <label htmlFor="num4">4</label>
        </li>
        <li>
          <input
            type="radio"
            id="num5"
            value="5"
            onChange={handleChange}
            checked={selectedRating === "5"}
          />
          <label htmlFor="num5">5</label>
        </li>
        <li>
          <input
            type="radio"
            id="num6"
            value="6"
            onChange={handleChange}
            checked={selectedRating === "6"}
          />
          <label htmlFor="num6">6</label>
        </li>
        <li>
          <input
            type="radio"
            id="num7"
            value="7"
            onChange={handleChange}
            checked={selectedRating === "7"}
          />
          <label htmlFor="num7">7</label>
        </li>
        <li>
          <input
            type="radio"
            id="num8"
            value="8"
            onChange={handleChange}
            checked={selectedRating === "8"}
          />
          <label htmlFor="num8">8</label>
        </li>
        <li>
          <input
            type="radio"
            id="num9"
            value="9"
            onChange={handleChange}
            checked={selectedRating === "9"}
          />
          <label htmlFor="num9">9</label>
        </li>

        <li>
          <input
            type="radio"
            id="num10"
            value="10"
            onChange={handleChange}
            checked={selectedRating === "10"}
          />
          <label htmlFor="num10">10</label>
        </li>
      </ul>
    </div>
  );
}

RatingSelect.propTypes = {
  selectedRatingHandler: PropTypes.func,
};

export default RatingSelect;
