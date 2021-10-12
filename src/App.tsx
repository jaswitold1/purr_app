//Router
import { BrowserRouter, Route } from "react-router-dom";
//Styles
import './App.css'
//Components
import Categories from './components/Categories';
import Category from './components/Category';


//// here fetch to prop drill to every component

/// first things ROUTING

function App() {

interface Ihej {
  props: {
    name:string
    surname:string

  }
}



const hej:Ihej["props"] = {
  name:'aa',
  surname:'bb'
}

  return (
    <BrowserRouter>
    <div className="App">
      
      {/* <Route exact path='/' component={Categories} /> */}
     
     
    </div>
    
    </BrowserRouter>
  );
}



export default App;
