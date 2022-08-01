import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import { messageContext } from '../App'



const Component2 = (props) => {
  console.log(props);
  const message1 = useContext(messageContext)

  const exampleObj = {
    message: message1,
    username: "ABC"
  }

  useEffect(() => {
    props.setObj(exampleObj)
  },[])

  return (
    <div>Hey from Component2
      {/* <messageContext.Consumer>
          {(message1) => <p>{message1}</p>}
      </messageContext.Consumer> */}
      <p>{message1}</p>
    </div>
    
  )
}

export default Component2