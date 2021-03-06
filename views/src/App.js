import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={HomePage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
