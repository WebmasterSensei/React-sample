import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js';
import Home from './Home.js';
// import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route,  Routes, NavLink } from 'react-router-dom';
import About from './About.js';
import {  HomeOutline , InformationCircleOutline  , NutritionOutline  } from 'react-ionicons';


function App() {
  return (
    <Router>
      <div>
      <div className='con-pad'>
    <div className="navwrapper">

      <div className="nav secondnav" style={{ display: 'none' }}>
         <NavLink className="navbutton" to="/" exact activeClassName="active-NavLink">
          <div className="navicon">
            <HomeOutline  />
          </div>
          <div className="navlabel">Home</div>
        </NavLink>
        <div className="navbutton">
          <div className="navicon">
            <InformationCircleOutline  />
          </div>
          <div className="navlabel">Search</div>
        </div>
        <div className="navbutton">
          <div className="navicon">
            <NutritionOutline  />
          </div>
          <div className="navlabel">Profile</div>
        </div>
      </div>
      <div className="nav mainnav">
        <NavLink className="navbutton" to="/" exact activeClassName="active">
          <div className="navicon">
            <HomeOutline  />
          </div>
          <div className="navlabel">Home</div>
        </NavLink>
        <NavLink className="navbutton" to="/about" activeClassName="active" > 
          <div className="navicon">
            <InformationCircleOutline  />
          </div>
          <div className="navlabel">About</div>
        </NavLink>
        <NavLink className="navbutton" to="/count" activeClassName="active">
          <div className="navicon" to>
            <NutritionOutline   />
          </div>
          <div className="navlabel">Products</div>
        </NavLink>
      </div>
    </div>


       <div className='Content'>
      <Routes>

          <Route path="/about" element={<About />} />
          <Route path="/"  element={<Home />} />
          <Route path="/count"  element={<Counter />} />
      
      </Routes>
        </div>
      </div>
      
     


      </div>
    </Router>
  );
}

export default App;
