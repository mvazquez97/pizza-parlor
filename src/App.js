import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then((r) => r.json())
      .then(setPizzas);
  }, []);
  console.log(pizzas);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/menu" component={Menu}>
            <Menu pizzas={pizzas} />
          </Route>
          <Route exact path="/about" component={About}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
