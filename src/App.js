import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Header, Footer} from './components';
import {Home, Shop, Product, Cart, Checkout, Login} from './screens';

function App() {
  return (
    <Router>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route path="/shop" component={Shop}/>
      <Route path="/product" component={Product}/>
      <Route path="/cart" component={Cart}/>
      <Route path="/checkout" component={Checkout}/>
      <Route path="/login" component={Login}/>
      <Footer/>
    </Router>
  );
}

export default App;
