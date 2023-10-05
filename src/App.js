import "./App.css";
import React, { useState, useEffect } from "react";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReviewList from "./components/ReviewList";

function App() {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then((r) => r.json())
      .then(setPizzas);
  }, []);

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/reviews")
      .then((r) => r.json())
      .then(setReviews);
  }, []);

  function handleNewReviews(newReview) {
    setReviews([...reviews, newReview]);
  }

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
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/reviews" component={ReviewList}>
            <ReviewList reviews={reviews} onAddNewReview={handleNewReviews} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
