import React, { useEffect, useState } from "react";
import { getBooksData } from "../../actions/bookaActions";
import { createBook, getAuthors, updateBook } from "../../utils/ApiUtils";
import { useFormHook } from "../../utils/CustomHooks";
import { error, success } from "../../utils/Toast";
import Form from "react-bootstrap/Form";

const BookCreate = (props) => {
  const bookObj = props.location.state;
  const [authors, setAuthors] = useState([]);

  const { values, onHandleChange, setValues } = useFormHook();
  console.log(values);
  // const dispatch = useDispatch();
  const onSubmit = async () => {
    const apiResponse = await createBook(values);
    if (apiResponse.status === 200) {
      success(apiResponse.data.message);
      props.history.push("/books");
    } else {
      error(apiResponse.response.data.message);
    }
  };

  const onUpdate = async () => {
    const apiResponse = await updateBook(values, bookObj._id);
    if (apiResponse.status === 200) {
      success(apiResponse.data.message);
      props.history.push("/books");
    } else {
      error(apiResponse.response.data.message);
    }
  };

  useEffect(() => {
    if (bookObj) {
      const bookData = { ...values };
      bookData.name = bookObj.name;
      bookData.description = bookObj.description;
      bookData.price = bookObj.price;
      bookData.quantity = bookObj.quantity;
      bookData.published_year = bookObj.published_year;
      setValues(bookData);
    }
  }, [bookObj]);

  useEffect(() => {
    (async () => {
      const apiResponse = await getAuthors();
      setAuthors(apiResponse.data.authorData);
    })();
  }, []);

  return (
    <div>
      <h4 className="my-5">{bookObj ? "Update Book" : "Add Book"}</h4>
      <div>
        <form className="d-flex flex-column align-items-center ">
          <input
            type="text"
            name="name"
            placeholder="name"
            value={values.name}
            onChange={(event) => onHandleChange(event)}
            className="form-control w-50 mt-2"
          />
          <input
            type="text"
            name="description"
            placeholder="description"
            value={values.description}
            onChange={(event) => onHandleChange(event)}
            className="form-control w-50 mt-2"
          />
          <input
            type="number"
            name="price"
            placeholder="price"
            value={values.price}
            onChange={(event) => onHandleChange(event)}
            className="form-control w-50 mt-2"
          />
          <input
            type="number"
            name="quantity"
            placeholder="quantity"
            value={values.quantity}
            onChange={(event) => onHandleChange(event)}
            className="form-control w-50 mt-2"
          />
          <input
            type="text"
            name="published_year"
            placeholder="Published Year"
            value={values.published_year}
            onChange={(event) => onHandleChange(event)}
            className="form-control w-50 mt-2"
          />
          <Form.Select className="w-50 mt-2" aria-label="Default select example"
            onChange = {(event) => setValues({...values, author: event.target.value})}
          >
            {/* <option>Authors</option> */}
            {authors.map (author => (
              <option value={author._id}>{author.name}</option>
            ))}
            
          </Form.Select>
        </form>
        {bookObj ? (
          <button className="btn btn-warning mt-3" onClick={onUpdate}>
            Update
          </button>
        ) : (
          <button className="btn btn-primary mt-3" onClick={onSubmit}>
            Create
          </button>
        )}
      </div>
    </div>
  );
};

export default BookCreate;
