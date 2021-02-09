import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from "./components/pages/About"
import Resume from "./components/pages/Resume"
import Projects from "./components/pages/Projects"
import Contact from "./components/pages/Contact"
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';

function App() {
  return (
    <>
    <Router basename='/portfolio'>
    {/* <div className="App"> */}
      <Navbar />
      <Switch>
        <Route path='/' exact component={About}/>  
        <Route path='/about' component={About}/>  
        <Route path='/resume' component={Resume}/>  
        <Route path='/projects' component={Projects}/>
        <Route path='/contact' component={Contact}/>  
      </Switch>
    {/* </div> */}
    </Router>
    </>
  );
}

export default App;
