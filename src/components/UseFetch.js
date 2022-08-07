import React from 'react'
import { useFetch } from '../utils/CustomHooks'

const UseFetch = () => {

  const {data} = useFetch("https://jsonplaceholder.typicode.com",'comments')
  console.log(data)

  return (
    <div>UseFetch</div>
  )
}

export default UseFetch