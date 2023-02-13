import { useSelector, useDispatch } from "react-redux"
import { removeCar } from "../store"


function CarList() {
  const {cars, name} = useSelector(({ form, cars: { data, searchTerm }}) => {
    const filteredData= data.filter(car => car.name.toLowerCase().includes(searchTerm))
    return {
      name: form.name,
      cars: filteredData
    }
  })
  const dispatch = useDispatch()
  const handleClick = (id) => {
    dispatch(removeCar(id))
  }
  const renderedCars = cars.map(car => {
    const bold = name && car.name.toLowerCase().includes(name)
    return(
      <div className={`panel ${ bold && 'bold'}`} key={car.id}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button className="button is-danger"
          onClick={() => handleClick(car.id)}>
          Delete
        </button>
      </div>
    )
  })
  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  )
}

export default CarList
