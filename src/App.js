import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Header, Footer} from './components';
import {Home, Shop, Product, Cart, Checkout, Login, Signup} from './screens';

function App() {
  return (
    <Router>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route path="/shop" component={Shop}/>
      <Route path="/product/:id" component={Product}/>
      <Route path="/cart" component={Cart}/>
      <Route path="/checkout" component={Checkout}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Footer/>
    </Router>
  );
}

export default App;
