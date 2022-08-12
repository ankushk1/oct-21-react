import React, { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactItems from "./ContactItems";
// List of contacts (data  -id, name, number, isFavourite)
// Create All crud operations - Read, Create, Update, Delete
// We will store the data in LocalStorage
// We will also create Filter - All, Favourites, Non Favourites

const ContactApp = () => {
  const [contactInput, setContactInput] = useState({
    name: "",
    number: ""
  });
  const [contactList, setContactList] = useState(() => {
    let contacts = JSON.parse(localStorage.getItem("contacts"));
    return contacts.length > 0 ? contacts : [];
  });
  const [filter, setFilter] = useState("All");
  const [isEditing, setIsEditing] = useState({
    edit: false,
    contactId: ""
  });

  const onHandleChange = (event) => {
    setContactInput({
      ...contactInput,
      [event.target.name]: event.target.value
    });
  };

  const onContactAdd = () => {
    setContactList([
      ...contactList,
      {
        id: uuidv4().split("-")[0],
        name: contactInput.name,
        number: contactInput.number,
        isFavourite: false
      }
    ]);

    setContactInput({
      number: "",
      name: ""
    });
  };

  const onContactDelete = (id) => {
    const updatedList = contactList.filter((contact) => contact.id !== id);
    setContactList(updatedList);
  };

  const onContactEdit = (id) => {
    setIsEditing({ ...isEditing, edit: true, contactId: id });
    const currContactList = [...contactList];
    const contact = currContactList.find((contact) => contact.id === id);
    setContactInput({ number: contact.number, name: contact.name });
  };

  const onContactUpdate = () => {
    const contactId = isEditing.contactId;
    const currContactList = [...contactList];
    const itemIndex = currContactList.findIndex(
      (contact) => contact.id === contactId
    );
    const contact = currContactList.find((contact) => contact.id === contactId);
    currContactList[itemIndex] = {
      ...contact,
      name: contactInput.name,
      number: contactInput.number
    };
    setContactList(currContactList);
    setContactInput({
      number: "",
      name: ""
    });
    //splice(1,1, newElement)
    setIsEditing({ ...isEditing, edit: false, contactId: "" });
  };

  const onhandleFavourite = (id) => {
    const currContactList = [...contactList];
    const itemIndex = currContactList.findIndex((contact) => contact.id === id);
    const contact = currContactList.find((contact) => contact.id === id);
    currContactList[itemIndex] = {
      ...contact,
      isFavourite: !contact.isFavourite
    };
    setContactList(currContactList);
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contactList));
  }, [contactList]);

  const renderAllContacts = () => {
    return contactList.map((contact, i) => (
      <div key={i}>
        <ContactItems
          contactObj={contact}
          onContactEdit={onContactEdit}
          onContactDelete={onContactDelete}
          onhandleFavourite={onhandleFavourite}
        />
      </div>
    ));
  };

  const renderFavContacts = () => {
    return contactList.map(
      (contact, i) =>
        contact.isFavourite && (
          <div key={i}>
            <ContactItems
              contactObj={contact}
              onContactEdit={onContactEdit}
              onContactDelete={onContactDelete}
              onhandleFavourite={onhandleFavourite}
            />
          </div>
        )
    );
  };

  const renderNonFavContacts = () => {
    return contactList.map(
      (contact, i) =>
        !contact.isFavourite && (
          <div key={i}>
            <ContactItems
              contactObj={contact}
              onContactEdit={onContactEdit}
              onContactDelete={onContactDelete}
              onhandleFavourite={onhandleFavourite}
            />
          </div>
        )
    );
  };
  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <div>
          <div>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={contactInput.name}
              onChange={(e) => onHandleChange(e)}
            />
          </div>
          <div>
            <input
              type="text"
              name="number"
              placeholder="Enter number"
              value={contactInput.number}
              onChange={(e) => onHandleChange(e)}
            />
          </div>
        </div>
        {!isEditing.edit ? (
          <button
            className="btn btn-primary align-self-center ms-2 p-2"
            onClick={() => onContactAdd()}
          >
            Add
          </button>
        ) : (
          <button
            className="btn btn-warning align-self-center ms-2 p-2"
            onClick={() => onContactUpdate()}
          >
            Update
          </button>
        )}
      </div>
      <div className="d-flex justify-content-evenly mx-5 px-5 mt-4">
        <button
          onClick={() => setFilter("All")}
          className={filter === "All" ? "btn btn-info" : "btn btn-light"}
        >
          All
        </button>
        <button
          onClick={() => setFilter("Fav")}
          className={filter === "Fav" ? "btn btn-info" : "btn btn-light"}
        >
          Favourites
        </button>
        <button
          onClick={() => setFilter("Non-Fav")}
          className={filter === "Non-Fav" ? "btn btn-info" : "btn btn-light"}
        >
          Non-Favourites
        </button>
      </div>
      <div className="mt-4">
        <div className="d-flex justify-content-evenly w-50 ms-5">
          <h3>Name</h3>
          <h3>Number</h3>
        </div>
        {contactList.length > 0 && filter === "All" && renderAllContacts()}
        {contactList.length > 0 && filter === "Fav" && renderFavContacts()}
        {contactList.length > 0 &&
          filter === "Non-Fav" &&
          renderNonFavContacts()}
      </div>
    </div>
  );
};

export default ContactApp;
