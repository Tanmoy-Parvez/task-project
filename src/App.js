import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header/Header';
import ProductDetails from './Pages/Home/DisplayProducts/ProductDetails';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Order from './Pages/Order/Order';

function App() {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/details/:id">
            <ProductDetails />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
