//Router
import { BrowserRouter, Route } from "react-router-dom";
//Styles
import "./App.css";
//Components
import Categories from "./components/Categories";
import Category from "./components/Category";
import Stats from "./components/Stats";
//Assets
import purrLogo from './assets/Logo.svg'
//Context
import { StatsContext, StatsProvider } from "./Context/StatsReducer";


/// first things ROUTING

function App() {

  return (
    <BrowserRouter>
    <StatsProvider>
      <div className='App'>
        <div><img src={purrLogo} alt="Purr App Logo" /></div>
        
        <Route exact component={Categories} path='/'/>
        
        <Route exact component={Category} path='/hats'/>
        <Route exact component={Category} path='/sinks'/>
        <Route exact component={Category} path='/space'/>
        <Route exact component={Category} path='/ties'/>
        <Route exact component={Category} path='/sunglasses'/>
        <Route exact component={Category} path='/clothes'/>
        <Route exact component={Category} path='/boxes'/>
        
        <Route exact component={Stats} path='/Stats'/>
      </div>
      </StatsProvider>
    </BrowserRouter>
        
        
        
        

  );
}

export default App;
