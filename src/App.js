import './App.css';
import {Route, Switch} from 'react-router-dom'
import Main from "./pages/Main"
import About from "./pages/About"
import Footer from "./components/Footer"
import Projects from "./pages/Projects"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
