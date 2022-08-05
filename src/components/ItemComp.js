import React from "react";

const ItemComp = ({ id, title }) => {
  return (
    <div>
      <div>
        <pre>{id}</pre>
        <pre>{title}</pre>
      </div>
    </div>
  );
};

export default ItemComp;
