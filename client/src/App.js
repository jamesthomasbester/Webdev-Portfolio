import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import {BrowserRouter , Route ,Routes } from "react-router-dom";
import Contact from "./components/Contact";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
          <Routes>
            <Route path="/" element={<Body/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
