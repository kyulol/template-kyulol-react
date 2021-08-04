import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/home/Home';
import Navbar from './Components/navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <div className="mt-20">
            <Route exact path="/" component={Home}/>
          </div>  
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
