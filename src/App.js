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
import ResDetails from './components/ResDeatils/ResDetails';

function App() {
  return (
    <div >
     <Router>
     <Navbar/>
     <Header/>
     <Item/>
     <ResDetails/>
     </Router>
    </div>
  );
}

export default App;
