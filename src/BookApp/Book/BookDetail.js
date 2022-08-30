import React from "react";
import { deleteBook } from "../../utils/ApiUtils";
import { error, success } from "../../utils/Toast";

const BookDetail = (props) => {
  const { name, description, price } = props.location.state.bookData;

  const onBookUpdate = () => {
    props.history.push('/book-create',  props.location.state.bookData)
  }

  const onBookDelete = async () => {
    const apiResponse = await deleteBook( props.location.state.bookData._id);
    if (apiResponse.status === 200) {
      success(apiResponse.data.message);
      props.history.push("/books");
    } else {
      error(apiResponse.response.data.message);
    }
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-1 align-self-start">
          <button
            className="btn btn-primary "
            onClick={() => props.history.push("/books")}
          >
            Back
          </button>
        </div>
        <div className="col-10 d-flex align-items-center flex-column">
          <h3>Book Detail</h3>
          <div className="card card-shadow" style={{ width: "28rem" }}>
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
              <li className="list-group-item">
                Author Name - {props.location.state.bookData.author.name}
              </li>
              <li className="list-group-item">
                Author Age- {props.location.state.bookData.author.age}
              </li>
              <li className="list-group-item"> ₹{price}</li>
            </ul>
          </div>
        </div>

        <div className="mt-3 d-flex justify-content-center">
          <div>
            <button className="btn btn-warning mx-5" onClick={() => onBookUpdate()}>Update</button>
          </div>
          <div>
            <button className="btn btn-danger" onClick={() => onBookDelete()}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
