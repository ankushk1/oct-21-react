import React, { useEffect, useState } from "react";
import ItemComp from "./ItemComp";

const ApiComp = () => {
  const [value, setValue] = useState("posts");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/${value}`);
      const data = await res.json();
      setData(data);
      setLoading(false);
    })();
  }, [value]);

  return (
    <div>
      <button onClick={() => setValue("posts")}>Posts</button>
      <button onClick={() => setValue("albums")}>Albums</button>
      <button onClick={() => setValue("todos")}>Todos</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((item) => <ItemComp id={item.id} title={item.title} />)
      )}
    </div>
  );
};

export default ApiComp;
