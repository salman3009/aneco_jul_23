import './Table.css';
import download from '../assets/image/download.jpg';
import Header from '../Header';
function Table(){
    return (<div>
      <Header/>
      <div class="container">
          <div class="row">
              <div class="col-md-12">
                <div  class="text-center">
                     <h1>Add Book</h1>
                  </div>
              </div>
          </div>
          <div class="row">
            
              <div class="col-md-4">
                <form>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Book ID  </label>
                      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                     
                    </div>
                  
                    <div class="row">
                        <div class="col-12">
                            <div  class="text-center">
                               <button type="submit" class="btn btn-outline-success">Add</button>
                            </div>
                           
                        </div>
                    </div>
                   
                  </form>
              </div>
              <div class="col-md-4">

            </div>
              <div class="col-md-4">

              </div>
          </div>
          <div class="row">
              <div class="col-md-1">

              </div>
              <div class="col-md-10">
                <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td><i class="fa fa-pencil-square-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;<i class="fa fa-trash" aria-hidden="true"></i></td>
                        <td><a href="">Purchase</a></td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>    <td><i class="fa fa-pencil-square-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;<i class="fa fa-trash" aria-hidden="true"></i></td></td>
                        <td><a href="">Purchase</a></td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>    <td><i class="fa fa-pencil-square-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;<i class="fa fa-trash" aria-hidden="true"></i></td></td>
                        <td><a href="">Purchase</a></td>
                      </tr>
                      
                    </tbody>
                  </table> 
            </div>
            <div class="col-md-1">
                  
            </div>
        </div>
        </div>
    </div>)
}

export default Table;