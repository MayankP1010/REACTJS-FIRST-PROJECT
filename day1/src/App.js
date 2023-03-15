import './App.css';
import Registration from './Registration';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Login from './Login';
import Home from './Home';
import About from './About';
import Meals from './Meals';
import Cart from './Cart';
 import Nav from './Nav';
 import Drink from './Drink';
 import CartProvider from './CartProvider';
 import {DrinksProvider} from './DrinksProvider';
import { MealsProvider } from './MealsProvider';




function App() {
  return (
    <div>
      {/* <NavBar/>  */}
     
           <Router>
      
    <div className="App">
      <Switch>
        <CartProvider>
        <Route path="/Home" component={Home} />
        <Route path="/Registration" component={Registration} />
        <Route path="/Login" component={Login} />
        <Route path="/Nav" component={Nav} /> 
        <Route path="/About" component={About} /> 
        
        <MealsProvider>
        <Route path="/Meals" component={Meals} />
        </MealsProvider>
        
        <Route path="/Cart" component={Cart} />  
        
        
        <DrinksProvider>
         <Route path="/drinks" component={Drink} />
        </DrinksProvider>
        </CartProvider>   
        {/* <Route path="/NavBar" component={NavBar} />  */}
       
      
        </Switch>
    </div>
    </Router>
    </div>
  );
}

export default App;

