import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Card.css";
import Button from "../Button/Button";

function Card({ food, onAdd, onRemove }) {
  const [count, setCount] = useState(0);
  const { title, Image, price /*, id */ } = food; // Removed unused 'id'

  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(food);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      onRemove(food);
    }
  };

  return (
    <div className="card">
      <span className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}>
        {count}
      </span>
      <div className="image__container">
        <img src={Image} alt={title} />
      </div>
      <h4 className="card__title">
        {title} . <span className="card__price">$ {price}</span>
      </h4>
      <div className="btn-container">
        <Button title={"+"} type={"add"} onClick={handleIncrement} />
        {count !== 0 && <Button title={"-"} type={"remove"} onClick={handleDecrement} />}
      </div>
    </div>
  );
}

Card.propTypes = {
  food: PropTypes.shape({
    title: PropTypes.string.isRequired,
    Image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    // id: PropTypes.string.isRequired, // Removed id from propTypes
  }),
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Card;
