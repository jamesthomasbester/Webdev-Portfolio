import Body from "./components/body";
import Footer from "./components/footer";
import Header from "./components/header";
import About from "./components/About";
import Projects from "./components/projects";
import {BrowserRouter , Route ,Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
          <Routes>
            <Route path="/" element={<Body/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={<Projects/>}/>
          </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
