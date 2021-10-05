import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';
import QuotePage from './pages/Quote';
import NavBar from './components/navBar';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/Calculator" component={CalculatorPage} />
        <Route path="/Quote" component={QuotePage} />
      </div>
    </Router>
  );
}

export default App;
