import './Register.css';
import Header from '../Header';
import { Link } from 'react-router-dom';
const Register=()=>{
    return (<div>
      <Header/>
    <div class="container">
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
                <h1>Sign Up</h1>
                <form>
                    <div class="form-group">
                        <label for="firstName">First Name</label>
                        <input type="text" class="form-control" id="firstName"/>

                    </div>
                    <div class="form-group">
                        <label for="firstName">Last Name</label>
                        <input type="text" class="form-control" id="firstName"/>

                    </div>
                    <div class="form-group">
                        <label for="firstName">Email</label>
                        <input type="text" class="form-control" id="firstName"/>

                    </div>
                    <div class="form-group">
                        <label for="firstName">Password</label>
                        <input type="text" class="form-control" id="firstName"/>

                    </div>
                

                    <button type="submit" class="btn btn-primary"><Link to="/login">Submit</Link></button>
                </form>
            </div>
            <div class="col-4"></div>
        </div>
    </div>
    </div>)
}
export default Register;