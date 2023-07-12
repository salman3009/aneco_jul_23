import './Mobile.css';

const Mobile=(props)=>{
      return (<div className="box">
         <img src={props.image}/>
        <h1>Mobile Name: - {props.name}</h1>
        <h2>Amount:{props.amount}</h2>
        <h3>Discount:{props.discount}</h3>
      </div>)
}
export default Mobile;