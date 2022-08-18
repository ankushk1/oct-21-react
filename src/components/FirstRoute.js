import React from "react";
import { useHistory } from "react-router-dom";

const FirstRoute = () => {

  const history = useHistory();
  const onRedirect = () => {
    history.push('/second/22',{ user: {user:"Amarnath", user2:"Yashaswi"}})
  }


  // prev

  //next

  // const [menuList, setMenuList] = useState([{id:1, name:songs}, {id:2,name:"playlist"}])
  // const [menuList, setMenuList] = useState([songs,playlist ])
  // const initialIndex = 0
  
  return (
    <div>
      FirstRoute <br />
      <button onClick={onRedirect}>Redirect</button>
      <button onClick={()=> history.goForward()}>Go forward</button>
    </div>
  );
};

export default FirstRoute;
