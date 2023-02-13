import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, addCar, removeCar, changeSearchTerm } from "./slices/carsSlice";
import { formReducer, changeCost, changeName } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carsReducer
  }
})

export {
  store,
  addCar,
  removeCar,
  changeSearchTerm,
  changeCost,
  changeName
}