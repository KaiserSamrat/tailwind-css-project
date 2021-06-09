import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Item from './components/Item/Item';
function App() {
  return (
    <div >
     <Router>
     <Navbar/>
     <Header/>
     <Item/>
     </Router>
    </div>
  );
}

export default App;
