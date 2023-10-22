import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slice/counterSlice'
 const store= configureStore({
  reducer:{
    counterReducer:counterSlice,
  }
})
export default store