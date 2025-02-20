import React from "react";
import "./css/App.css";
import { Route, Switch, Redirect } from "react-router-dom";

// import Header from "./components/Header";
import Footer from "./components/Footer";
import CopyRight from "./components/CopyRight";
import Top from "./pages/Top";
import About from "./pages/About";
import Business from "./pages/business/Business";
import Recruit from "./pages/Recruit";
import Works from "./pages/Works";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/top" exact component={Top} />
        <Route path="/about" exact component={About} />
        <Route path="/business/:name" component={Business} />
        <Route path="/recruit" exact component={Recruit} />
        <Route path="/works" exact component={Works} />
        <Redirect to="/top" />
      </Switch>
      <Footer />
      <CopyRight />
    </>
  );
}

export default App;
