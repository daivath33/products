import { useState } from "react";
import Button from "../UI/Button/Button";
import SocialIcons from "../UI/SocialIcons/SocialIcons";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import { FaRegStar, FaStar } from "react-icons/fa";
import "./ProductDetails.css";
import Rating from "../UI/Rating/Rating";

const ProductDetails = (props) => {
  const [count, setCount] = useState(1);
  const [url, setUrl1] = useState(0);

  const slideImagesLeft = () => {
    if (url > 0) {
      setUrl1(url - 1);
    }
  };
  const slideImagesRight = () => {
    if (url < 3) {
      setUrl1(url + 1);
    }
  };
  const increase = () => {
    if (count < props.stock) setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="product-imgs">
          <div className="img-item">
            <img src={props.images[url]} alt={props.title} />
          </div>
          <p className="slide-btn left" onClick={slideImagesLeft}>
            <AiOutlineLeft />
          </p>
          <p className="slide-btn right" onClick={slideImagesRight}>
            <AiOutlineRight />
          </p>
        </div>
        <div className="product-content">
          <h5 className="product-brand"> {props.brand}</h5>

          <h5 className="product-title">{props.title}</h5>
          <Rating />
          <div className="product-price">
            <p className="price">
              Price: <span>{props.price.toFixed(2)} €</span>
            </p>
          </div>

          <div className="product-details">
            <h2>about this item: </h2>
            <p>{props.description}</p>

            <ul>
              <li>
                Color: <span>{props.color}</span>
              </li>
              <li>
                Size: <span>{props.size}</span>
              </li>
              <li>
                Available: <span>in stock {props.stock} items</span>
              </li>
              <li>
                Category: <span>{props.category}</span>
              </li>
              <li>
                Delivery time: <span>3-4 working days</span>
              </li>
              <li>
                Delivery price: <span>from 0.00 €</span>
              </li>
            </ul>
          </div>
          <div className="btn-group">
            <div className="count-btns">
              <button className="btn-count" onClick={decrease}>
                <AiOutlineMinus />
              </button>
              <p className="count">{count}</p>
              <button className="btn-count" onClick={increase}>
                <AiOutlinePlus />
              </button>
            </div>
            <Button title="Add to Cart" />
          </div>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
