import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getBooksData } from "../../actions/bookaActions";
import Navbar from "../../components/Navbar";
import { getBooks } from "../../utils/ApiUtils";
import { error, success } from "../../utils/Toast";
import BookItem from "./BookItem";

const BooksList = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user)
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const booksSelector = useSelector(
    (state) => state.booksDataFromStore.booksDataFromReducer
  );
  const [sort, setSort] = useState(false);

  useEffect(() => {
    dispatch(getBooksData());
  }, []);

  useEffect(() => {
    setBooks(booksSelector.booksData);
  }, [booksSelector]);

  useEffect(() => {
    if (searchText === "") {
      setBooks(booksSelector.booksData);
      return;
    }
    const filterArr = books.filter((book) => {
      return (
        book.name.toLowerCase().includes(searchText.toLowerCase()) ||
        book.author.name.toLowerCase().includes(searchText.toLowerCase()) ||
        book.description.toLowerCase().includes(searchText.toLowerCase()) ||
        String(book.price).includes(searchText)
      );
    });
    setBooks(filterArr);
  }, [searchText]);

  const sortData = (a, b) => {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  };

  const onSort = () => {
    const sortedData = books.sort(sortData);
    if (!sort) {
      setBooks(sortedData);
    } else {
      setBooks(sortedData.reverse());
    }
    setSort(!sort);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row mt-3">
          <div className="col-3">
            <div>
              <div className="input-group ms-5">
                <input
                  className="form-control border-end-0 border"
                  type="search"
                  value={searchText}
                  id="example-search-input"
                  onChange={(event) => setSearchText(event.target.value)}
                />
                <span className="input-group-append">
                  <button
                    className="btn btn-outline-secondary bg-white border-start-0 border-bottom-0 border ms-n5"
                    type="button"
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </span>
                {!sort && (
                  <span onClick={onSort}>
                    <i
                      className="fa-solid fa-arrow-up-wide-short ms-2 mt-1"
                      style={{
                        fontSize: "25px"
                      }}
                    ></i>
                  </span>
                )}
                {sort && (
                  <span onClick={onSort}>
                    <i
                      class="fa-solid fa-arrow-up-short-wide ms-2 mt-1"
                      style={{
                        fontSize: "25px"
                      }}
                    ></i>
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="col-6">
            <h4 className="">Books</h4>
          </div>
          <div className="col-3">
            {console.log(user.role)}
            {user.role === "SA" && (
              <>
                <button
                  className="btn btn-secondary"
                  onClick={() => history.push("/book-create")}
                >
                  Create Book
                </button>
                <button
                  className="btn btn-info ms-2"
                  onClick={() => history.push("/author-create")}
                >
                  Create Author
                </button>
              </>
            )}
            <button
              className="btn btn-outline-primary ms-2"
              onClick={() => history.push("/cart")}
            >
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
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
    </>
  );
};

export default BooksList;
