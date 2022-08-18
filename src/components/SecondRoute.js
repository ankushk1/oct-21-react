import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const SecondRoute = (props) => {

  console.log(props)
  const location = useLocation()
  console.log(location == props.location);
  const history = useHistory();
  return (
    <div>SecondRoute
      <br />
      <div>
        <button onClick={()=> history.goBack()}>Go back</button>
      </div>
    </div>
  )
}

export default SecondRoute