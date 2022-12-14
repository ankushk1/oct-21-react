import React, { useEffect, useState } from "react";
import { getBooksData } from "../../actions/bookaActions";
import { createAuthor, createBook, getAuthors, updateBook } from "../../utils/ApiUtils";
import { useFormHook } from "../../utils/CustomHooks";
import { error, success } from "../../utils/Toast";
import Form from "react-bootstrap/Form";

const AuthorCreate = (props) => {
  const bookObj = props.location.state;
  const [authors, setAuthors] = useState([]);

  const { values, onHandleChange, setValues } = useFormHook();
  // const dispatch = useDispatch();
  const onSubmit = async () => {
    const apiResponse = await createAuthor(values);
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
      bookData.age = bookObj.age;
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
    <div className="row my-5">
      <div className="col-2 btn btn-info back-btn" onClick={()=> props.history.push('/books')}>Back</div>
      <div className="col-8">
        {/* <h4 className="">{bookObj ? "Update Book" : "Add Book"}</h4> */}
        <h4 className="">Add Author</h4>
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
              name="age"
              placeholder="age"
              value={values.age}
              onChange={(event) => onHandleChange(event)}
              className="form-control w-50 mt-2"
            />
          </form>
          {/* {bookObj ? (
            <button className="btn btn-warning mt-3" onClick={onUpdate}>
              Update
            </button>
          ) : (
            <button className="btn btn-primary mt-3" onClick={onSubmit}>
              Create
            </button>
          )} */}
          <button className="btn btn-primary mt-3" onClick={onSubmit}>
              Create
            </button>
        </div>
      </div>
      <div className="col-2"></div>
    </div>
  );
};

export default AuthorCreate;
