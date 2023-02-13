import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";

const  formSlice = createSlice({  
  name: 'car',
  initialState: {
    name: '',
    cost: 0
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload
    },
    changeCost(state, action) {
      state.cost = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(addCar, (state) => {
      state.name = ''
      state.cost = 0
    })
  }
})

export const formReducer = formSlice.reducer

export const { changeName, changeCost } = formSlice.actions