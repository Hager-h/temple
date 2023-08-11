import './App.css';
import Home from "./components/home/Home"
import Contact from "./components/contact/index"
import Nav from "./components/navbar/Nav"
import {Routes,Route} from "react-router-dom"
import Shop from './components/Shop/Shop';
import Card  from './components/Card/Card';
function App() {
  return (
    <div className="App">
    <Nav />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/shop:cardId" element={<Card />} />
    
    </Routes>


  
  
    </div>
  );
}

export default App;
