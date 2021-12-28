import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
import OrderHistory from "./pages/OrderHistory";
import Success from './pages/Success'

function App() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <StoreProvider>
              <Nav />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/orderHistory" component={OrderHistory} />
                <Route exact path="/products/:id" component={Detail} />
                <Route component={NoMatch} />
              </Switch>
            </StoreProvider>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
  
  
  //redux change
  export default App;