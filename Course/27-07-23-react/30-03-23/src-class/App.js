 import {Component} from 'react';
import axios from 'axios';
import BalanceList from './BalanceList';

 class App extends Component{

  constructor(props){
    super(props);
    this.state={
      balance:0,
      amount:0,
      list:[]
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3000/expense').then((result)=>{
      this.setState({list:result.data})
    })
  }

   onChangeHandler=(event)=>{
     this.setState({amount:Number(event.target.value)})
   }

   onAddHandler=()=>{
    axios.post('http://localhost:3000/expense',{amount:this.state.amount,type:'ADD'}).then((result)=>{
      this.setState({balance:this.state.balance+this.state.amount,list:[...this.state.list,{amount:this.state.amount,type:'ADD'}]})
    })
     
   }

   onRemoveHandler=()=>{
    axios.post('http://localhost:3000/expense',{amount:this.state.amount,type:'REMOVE'}).then((result)=>{
      this.setState({balance:this.state.balance-this.state.amount,list:[...this.state.list,{amount:this.state.amount,type:'ADD'}]})
    })
  
   }


  render(){
    return(<div>
         Balance:{this.state.balance}
         <br/>
        <input type="number" onChange={this.onChangeHandler}/>
        <button onClick={this.onAddHandler}>ADD</button>
        <button onClick={this.onRemoveHandler}>Remove</button>
        <BalanceList list={this.state.list}/>
    </div>)
  }

 }

 export default App;