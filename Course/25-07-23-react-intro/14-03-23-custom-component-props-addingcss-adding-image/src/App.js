import Mobile from "./Mobile/Mobile";
import Expression from './Expression';
import mobile from './assets/mobile.png'
import mobile2 from './assets/mobile2.png'
function App(){
 
    return (<div>
        <h1>
            <Expression/>
            <Mobile image={mobile} name="sumsang" amount="200" discount="100"/>
            <Mobile image={mobile2} name="sony" amount="200" discount="100"/>
            <Mobile image={mobile} name="mi" amount="200" discount="100"/> 
        </h1>
    </div>)
}
export default App;