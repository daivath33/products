import { FaRegStar, FaStar } from "react-icons/fa";
import "./Rating.css";

const Rating = () => {
  return (
    <div className="product-rating">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaRegStar />
      <span>4.7(12)</span>
    </div>
  );
};

export default Rating;
