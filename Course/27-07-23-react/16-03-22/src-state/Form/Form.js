import './Form.css';
import List from '../List/List';
import {useState} from 'react';

const Form=()=>{

       let changeInput = "no data";
       let [getInput,setInput] = useState('basic data');
       let[getFlag,setFlag] = useState(false);
       //getInput is a user defined variable
       //it will give you latest data.
       //setInput - to update the value

       const onInputChangeHandler=(event)=>{
        changeInput = event.target.value;
       }

       const onSubmitHandler=()=>{
           setInput(changeInput);
           setFlag(true);
       }

      return (<div>
          FullName<input type="text" name="fullName" onChange={onInputChangeHandler}/>
          <button onClick={onSubmitHandler}>Submit</button>
          {getFlag?<List name={getInput}/>:null}
      </div>)
}

export default Form;