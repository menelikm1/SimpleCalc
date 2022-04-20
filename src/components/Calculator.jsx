import { FaTimes, FaDivide, FaPlus, FaMinus, FaEraser } from 'react-icons/fa';
import { useContext, useState} from 'react';
import CalculationsContext from '../context/CalculationsContext';

function Calculator() {
  const [text, setText] = useState(0)
  const {values, setValues, clearValues} = useContext(CalculationsContext)

  const handlePlusClick = (e) => {
    if(text === '') {
            alert('Please enter something')
        } else {
            setValues(values + parseInt(text))
            setText('')
            document.getElementById('inp').value = ''
        }
    
  }

  const handleMinusClick = (e) => {
    if(text === '') {
            alert('Please enter something')
        } else {
            setValues(values - parseInt(text))
            setText('')
            document.getElementById('inp').value = ''
        }
    
  }
  const handleTimesClick = (e) => {
    if(text === '') {
            alert('Please enter something')
        } else {
            setValues(values * parseInt(text))
            setText('')
            document.getElementById('inp').value = ''
        }
    
  }

  const handleDivisionClick = (e) => {
    if(text === '') {
            alert('Please enter something')
        } 
    else if (parseInt(text) === 0){
      alert('Undefined! Can not divide by 0')
    }else {
            setValues(values / parseInt(text))
            setText('')
            document.getElementById('inp').value = ''
        }
    
  }

  const handleClear = (e) => {
    clearValues()
    setText('')
    document.getElementById('inp').value = ''    
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div>
        <div className="card w-80 bg-base-100 shadow-xl">
            <div className="card-body">
                <form>
                  <input 
                    id="inp"
                    type="text" 
                    placeholder='Type here' 
                    className="w-full pr-40 bg-gray-300 input input-lg text-black"
                    onChange={handleChange}
                    defaultValue={text}
                  />
                  <div>{values}</div>
                </form>
                <div className="card-actions justify-end">
                    <button onClick={handlePlusClick} className="btn btn-primary"><FaPlus /></button>
                    <button onClick={handleMinusClick} className="btn btn-primary"><FaMinus /></button>
                    <button onClick={handleTimesClick} className="btn btn-primary"><FaTimes /></button>
                    <button onClick={handleDivisionClick} className="btn btn-primary"><FaDivide /></button>
                    <button onClick={handleClear} className="btn btn-primary"><FaEraser /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Calculator