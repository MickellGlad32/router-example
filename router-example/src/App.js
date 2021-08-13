
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail'
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route exact path='/projects'>
            <Projects />
          </Route>
          <Route path='/projects/:id'>
            <ProjectDetail />
          </Route>
          {/* <Route path ="*">
          <h1> Page not found</h1>
        </Route> */}
        <Route path='*'>
          <Redirect to="/" />
      </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
