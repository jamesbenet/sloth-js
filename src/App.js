// import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Form from "./components/Form";
import Nav from "./components/Nav";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <Nav></Nav>
      <Route exact path="/">
        <main>
          
        </main>
      </Route>
      <Route path="/new">
        <Form />
      </Route>
    </div>
  );
}

export default App;
