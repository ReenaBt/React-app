import { useState} from 'react';
import './InputForm.css'
const InputForm = (props) => {
  const [cityName, setcityName] = useState("")
  const [disableBtn, setDisableBtn] = useState(true)
  const[error,setError] = useState(false)
  
 
  const submitHandler = (event) => {
    event.preventDefault();
  props.cityHandler(cityName)
  }

  const inputChangeHandler = (event) => {
    setcityName(event.target.value)
 
  }
  const validateHandler = (event) => {
    if (event.target.value.trim() =='') {
     setError(true)
    } else {
      setDisableBtn(false)
      
    }
  }
  return (
    <form onSubmit={submitHandler} className="form">
      <div className="form__inputField">
        <input
          className="form__input"
          type="text"
          placeholder="Enter the name of the city"
          value={cityName}
          onChange={inputChangeHandler}
          required
          onBlur={validateHandler}
        />

        <button type="submit" className={"form__button"} disabled={disableBtn}>
          Show weather info
        </button>
      </div>
      {error && <div className="--error">recheck the input field</div>}
    </form>
  );
};

export default InputForm;
