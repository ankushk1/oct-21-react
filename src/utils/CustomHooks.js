import { useEffect, useState } from "react"

export const useFormHook = () => {

  const [values , setValues ] = useState({
  })

  const onHandleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = () => {
    //api call to post data 
    // move to another route
    console.log('Submit called')
  }

  return {
    values, 
    onHandleChange,
    onSubmit,
    setValues
  }
}


export const useFetch = (url, value) => {
  const [data, setData] = useState();

  const fetchData = async () => {
    const res = await fetch(`${url}/${value}`);
    const data = await res.json();
    setData(data);
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return {
    data
  }
}