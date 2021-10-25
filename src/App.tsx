//Router
import { BrowserRouter, Route } from "react-router-dom";
//Styles
import "./App.css";
//Components
import Categories from "./components/Categories";
import Category from "./components/Category";
//Assets
import purrLogo from './assets/Logo.svg'

//// here fetch to prop drill to every component

/// first things ROUTING

function App() {


  return (
    <BrowserRouter>
      <div className='App'>
        <div><img src={purrLogo} alt="Purr App Logo" /></div>
        <Route exact component={Categories} path='/'/>
        <Route exact component={Category} path='/:Category'/>
      </div>
    </BrowserRouter>
  );
}

export default App;
