import { useSelector,useDispatch } from "react-redux"
import { changeName, changeCost, addCar } from '../store'


function CarForm() {

  const dispath = useDispatch()
  const {name, cost} = useSelector(state => state.form)

  const handleNameChange = (e) => {
    dispath(changeName(e.target.value))
  }

  const handleCostChange = (e) => {
    const cost  = parseInt(e.target.value) || 0;
    dispath(changeCost(cost))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispath(addCar({
      name,cost
    }))
  }

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input type="text" value={name} onChange={handleNameChange} className="input is-expanded" />
          </div>        
          <div className="field">
            <label className="label">Cost</label>
            <input type="number" value={cost || ''} onChange={handleCostChange} className="input is-expanded" />
          </div>

        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CarForm
