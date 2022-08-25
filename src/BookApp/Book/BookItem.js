import React from "react";

const BookItem = ({ name, description, price, author }) => {
  return (
    <div>
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
        <button className="btn btn-info">View Details</button>
      </div>
    </div>
  );
};

export default BookItem;
