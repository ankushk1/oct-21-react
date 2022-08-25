import React, { useEffect, useState } from "react";
import { getBooks } from "../../utils/ApiUtils";
import { error, success } from "../../utils/Toast";
import BookItem from "./BookItem";

const BooksList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      const apiResponse = await getBooks();
      if (apiResponse.status === 200) {
        setBooks(apiResponse.data.booksData);
        console.log(apiResponse.data.message);
        success(apiResponse.data.message);
      } else {
        error(apiResponse.response.data.message);
      }
    })();
  }, []);

  return (
    <div>
      <h4 className="mt-5">Books</h4>
      <div className="d-flex justify-content-around mt-4">
        {books.length &&
          books.map((book, i) => (
            <BookItem
              key={i}
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
