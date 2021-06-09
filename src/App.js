import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div >
     <Router>
     <Navbar/>
     </Router>
    </div>
  );
}

export default App;
