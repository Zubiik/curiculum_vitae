import logo from './logo.svg';
import './App.css';
import HomePage from './handler/HomePage/Index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
    <HomePage/>
    </div></Router>
    
  );
}

export default App;
