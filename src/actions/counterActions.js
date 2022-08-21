import { INCREMENT, DECREMENT, RESET } from "./actionsTypes";


export const increaseCount = () => ({
  type: INCREMENT,
})

export const decreaseCount = () => ({
  type: DECREMENT,
})

export const reset = () => ({
  type: RESET,
})