import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import StudentWiki from "./pages/StudentWiki";
import Nav from "./components/Nav";
import {Route, Switch} from "react-router-dom";
function App() {
  return (
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/student-wiki" component={StudentWiki} />
      </Switch>
    </div>
  );
}

export default App;
