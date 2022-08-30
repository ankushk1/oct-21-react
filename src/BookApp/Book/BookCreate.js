import React, { useEffect } from "react";
import { getBooksData } from "../../actions/bookaActions";
import { createBook, updateBook } from "../../utils/ApiUtils";
import { useFormHook } from "../../utils/CustomHooks";
import { error, success } from "../../utils/Toast";

const BookCreate = (props) => {
  const bookObj = props.location.state;

  const { values, onHandleChange, setValues } = useFormHook();
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
  }

  useEffect(() => {
    if(bookObj) {
      const bookData = {...values};
      bookData.name = bookObj.name;
      bookData.description = bookObj.description;
      bookData.price = bookObj.price;
      bookData.quantity = bookObj.quantity;
      bookData.published_year = bookObj.published_year;
      setValues(bookData)
    }
  }, [bookObj])

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
