import { Component } from "react";

class BalanceList extends Component{


    constructor(props){
        super(props);
      }

      render(){
        return(<div>
            {this.props.list.map((obj,index)=>{
                return (<ol key={index}>
                    <li>{obj.amount}</li>
                    <li>{obj.type}</li>
                </ol>)
            })}
        </div>)
      }


}

export default BalanceList;