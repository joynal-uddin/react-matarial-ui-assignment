import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import PostDetails from './components/PostDetails/PostDetails';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="">
    <Header/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/post/:id"><PostDetails/></Route>

          <Route path="*"><h1>404 Not Found</h1></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
