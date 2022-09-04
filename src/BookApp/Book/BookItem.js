import React from "react";
import { useHistory } from "react-router-dom";
import { success } from "../../utils/Toast";

const BookItem = ({ book, name, description, price, author }) => {
  const history = useHistory();
  const onViewDetails = () => {
    history.push("/book-detail", { bookData: book });
  };

  const onAddToCart = () => {
    const cardData = JSON.parse(localStorage.getItem("cart")) ?? [];
    cardData.push(book);
    localStorage.setItem("cart", JSON.stringify(cardData));
    success('Item Added to cart')
  };

  return (
    <div className="m-4">
      <div className="card card-shadow" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src="https://www.booksreading.pk/skins/bookreading/images/books-1.jpg"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{author}</li>
          <li className="list-group-item"> ₹{price}</li>
        </ul>
        <div>
          <button
            className="btn btn-info me-3 my-2"
            onClick={() => onViewDetails()}
          >
            View Details
          </button>
          <button className="btn btn-outline-success" onClick={() => onAddToCart()}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
