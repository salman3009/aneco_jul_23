import './Form.css';
import List from '../List/List';

const Form=()=>{

       let changeInput = "no data";
       let input;

       const onInputChangeHandler=(event)=>{
        changeInput = event.target.value;
       }

       const onSubmitHandler=()=>{
           input = changeInput;
       }

      return (<div>
          FullName<input type="text" name="fullName" onChange={onInputChangeHandler}/>
          <button onClick={onSubmitHandler}>Submit</button>
          <List name={input}/>
      </div>)
}

export default Form;