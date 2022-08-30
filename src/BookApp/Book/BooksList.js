import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getBooksData } from "../../actions/bookaActions";
import { getBooks } from "../../utils/ApiUtils";
import { error, success } from "../../utils/Toast";
import BookItem from "./BookItem";

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const booksSelector = useSelector(
    (state) => state.booksDataFromStore.booksDataFromReducer
  );

  useEffect(() => {
    dispatch(getBooksData());
  }, []);

  useEffect(() => {
    setBooks(booksSelector.booksData);
  }, [booksSelector]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <h4 className="mt-5 ">Books</h4>
        </div>
        <div className="col-3 mt-5">
          <button className="btn btn-secondary" onClick={() => history.push('/book-create')}>Create Book</button>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-around mt-4">
        {books &&
          books.length &&
          books.map((book, i) => (
            <BookItem
              key={i}
              book={book}
              name={book.name}
              description={book.description}
              price={book.price}
              author={book.author.name}
            />
          ))}
      </div>
    </div>
  );
};

export default BooksList;
