import './App.css';
import {Route, Switch} from 'react-router-dom'
import Main from "./pages/Main"
import About from "./pages/About"
import Footer from "./components/Footer"
import Projects from "./pages/Projects"
import React from 'react';

function App() {

  const [projects, setProjects] = React.useState([])

  const getProjects = () => {
    fetch("https://gcbportfolio.herokuapp.com/projects")
      .then(res => res.json())
      .then(data => {
        setProjects(data)
      })
  }

  React.useEffect(() => {
    getProjects()
  }, [])

  return (
    <div className="app-div">
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Playball&display=swap" rel="stylesheet"></link>
      <Switch>
        <Route exact path="/">
          <Main projects={projects}/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects projects={projects}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
