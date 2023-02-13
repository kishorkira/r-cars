import { createSlice, nanoid } from "@reduxjs/toolkit";

const  carsSlice = createSlice({  
  name: 'cars',
  initialState: {
    searchTerm: '',
    data: []
  },
  reducers: {
    addCar(state, action) {
      const { name, cost } = action.payload
      state.data.push({
        id: nanoid(),
        name,
        cost
      })
    },
    removeCar(state, action) {
      state.data = state.data.filter(car => car.id !== action.payload)
    },
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload
    }
  }
})

export const carsReducer = carsSlice.reducer

export const { addCar, removeCar, changeSearchTerm } = carsSlice.actions