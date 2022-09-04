import React, { useState } from "react";

const Cart = (props) => {
  const [cartData, setCartData] = useState(() => {
    const data = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    return data;
  });

  const onDeleteItem = (id) => {
    const updatedCart = cartData.filter(item => item._id !== id)
    setCartData(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  const getTotalPrice = () => {
    let sum = 0;
    cartData.forEach((item) => {
      sum = sum + item.price;
    });
    return sum;
  };

  return (
    <div className="container row">
      <div
        className="col-3 btn btn-info back-btn mt-4"
        onClick={() => props.history.push("/books")}
      >
        Back
      </div>
      <div className="col-10 ">
        <h3 className=" mt-4 mb-5 ">Cart</h3>
        {cartData.length
          ? cartData.map((item) => (
              <div>
                <div className="d-flex justify-content-between border border-dark p-3 mb-3">
                  <div>{item.name}</div>
                  <div>{item.description}</div>
                  <div>{item.price}</div>
                  <div onClick={()=> onDeleteItem(item._id)}>
                  <i className="fa-solid fa-trash"></i>
                  </div>
                </div>
              </div>
            ))
          : "No items in the cart"}
        {cartData.length > 0 && (
          <div className="d-flex justify-content-end me-3">
            <div className="">
              <h5>Total- {getTotalPrice()}</h5>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
