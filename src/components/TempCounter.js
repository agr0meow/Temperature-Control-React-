import { useState } from "react";
import "./TempCounter.css";
const TempCounter = () => {
  const [count, setCount] = useState(11);
  const incrementButton = () => {
    if (count < 35) {
      return setCount(count + 1);
    }
  };
  const decrementButton = () => {
    if (count > 0) {
      return setCount(count - 1);
    }
  };
  return (
    <div className="wrapper">
      <div className="temperature-display-container">
        {count < 17 ? (
          <div className={`temperature-display cold `}>{count}°C</div>
        ) : (
          <div className={`temperature-display hot  `}>{count}°C</div>
        )}
      </div>
      <button onClick={incrementButton}>+</button>
      <button onClick={decrementButton}>-</button>
    </div>
  );
};
export default TempCounter;
