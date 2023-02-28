import React from "react";
import "./App.css";
import {
        BrowserRouter as Router,
        Route,
        Routes,
        Link
        } from "react-router-dom";
        import {Home} from './pages/Home.js'
        import { Offers } from "./pages/Offers.js";
        import { Quantization } from "./pages/Quantization.js";
        import { Specials } from "./pages/Specials.js";


const App = () => {
  return ( 
  <Router>
    <header className="App">
      <div  className="container_log">
        <h1 className="container_Title">
          Dillery
        </h1>
      </div>
        <nav>
          <ul className="nav_Main">
            <li className="list-item "><Link className="link-item" to='/'>Home</Link></li>
            <li className="list-item "><Link className="link-item" to='/Offers'>Offers</Link></li>
            <li className="list-item container-sublist"><Link className="link-item container-sublink" to=''>Category</Link>
              <ul className="sub-list">
                <li className="sub-list-item"><Link className="sub-list-link" to>Cake</Link></li>
                <li className="sub-list-item"><Link className="sub-list-link" to>Dessert</Link></li>
                <li className="sub-list-item"><Link className="sub-list-link" to>Pie</Link></li>
                <li className="sub-list-item"><Link className="sub-list-link" to>Cookies</Link></li>
              </ul>
            
            </li>
            <li className="list-item "><Link className="link-item" to='/Quantization'>Quantization</Link></li>
            <li className="list-item "><Link className="link-item" to='/Specials'>Specials</Link></li>
          </ul>   
        </nav>
    </header>
          
    <main className="main">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Offers" element={<Offers />} />
        <Route path="/Quantization" element={<Quantization />} />
        <Route path="/Specials" element={<Specials />} />
        </Routes>
    </main> 

          </Router>
  );
};

export default App;
