import React from 'react'
import { useFormHook } from '../utils/CustomHooks'

const UseForm = () => {

  console.log(useFormHook());
  const {values, onHandleChange, onSubmit} = useFormHook()

  return (
    <div>
      <div>
        <p>{values.firstname}</p>
        <p>{values.lastname}</p>
        <p>{values.email}</p>
      </div>
      <form>
        <input
          type="text"
          name="firstname"
          placeholder="firstname"
          value={values.firstname}
          onChange={(event) => onHandleChange(event)}
        />
        <input
          type="text"
          name="lastname"
          placeholder="lastname"
          value={values.lastname}
          onChange={(event) => onHandleChange(event)}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={values.email}
          onChange={(event) => onHandleChange(event)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={values.password}
          onChange={(event) => onHandleChange(event)}
        />
      </form>
      <button onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default UseForm