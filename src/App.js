import './App.css';
import BrandStatement from "./components/BrandStatement"
import About from "./pages/About"
import Footer from "./components/Footer"
import Image from "./components/Image"
import Projects from "./pages/Projects"
import Title from "./components/Title"


function App() {
  return (
    <div>
      <h2> App components</h2>
      <Image />
      <Title />
      <About />
      <BrandStatement />
      <Projects />
      <Footer />
    </div>

  );
}

export default App;
