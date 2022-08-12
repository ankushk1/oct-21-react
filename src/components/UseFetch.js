import React from 'react'
import { useFetch } from '../utils/CustomHooks'

const UseFetch = () => {

  // Create buttons to fetch multiple data eg- posts, comments, albums, todos
  // Show the fetched data
  const {data} = useFetch("https://jsonplaceholder.typicode.com",'comments')
  console.log(data)

  return (
    <div>UseFetch</div>
  )
}

export default UseFetch