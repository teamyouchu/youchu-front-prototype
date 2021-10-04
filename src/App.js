import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from 'pages/index';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
