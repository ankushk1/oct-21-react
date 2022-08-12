import React from "react";

const ContactItems = ({
  contactObj,
  onContactEdit,
  onContactDelete,
  onhandleFavourite
}) => {
  return (
    <div className="contact-list mt-3">
      <div>
        <span onClick={() => onhandleFavourite(contactObj.id)} className="me-2">
          {contactObj.isFavourite ? (
            <i class="fa-solid fa-heart"></i>
          ) : (
            <i class="fa-regular fa-heart"></i>
          )}
        </span>
        {contactObj.name}
      </div>
      <div>{contactObj.number}</div>
      <button
        className="btn btn-secondary"
        onClick={() => onContactEdit(contactObj.id)}
      >
        Edit
      </button>
      <button
        className="btn btn-danger"
        onClick={() => onContactDelete(contactObj.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default ContactItems;
