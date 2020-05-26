import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skill from './Components/Skill/Skill'
import Services from './Components/Services/Services'
import Works from './Components/Works/Works'
import Contact from './Components/Contact/Contact'
import './App.css'

function App() {
  return (
    <Router>
    <div className="Body">
      <div className="row">
        <div className="col-4">
          <Navbar />
        </div>
        <div className="col-8">         
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/skill' component={Skill} />
            <Route path='/services' component={Services} />
            <Route path='/works' component={Works} />
            <Route path='/contact' component={Contact} />
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
