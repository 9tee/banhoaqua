import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Header, Footer} from './components';
import {Home} from './screens';

function App() {
  return (
    <Router>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Footer/>
    </Router>
  );
}

export default App;
