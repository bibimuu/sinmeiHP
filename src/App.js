import React from "react";
import "./css/App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CopyRight from "./components/CopyRight";
import Top from "./pages/Top";
import About from "./pages/About";
import Business from "./pages/business/Business";
import Recruit from "./pages/Recruit";
import Works from "./pages/Works";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/top" exact component={Top} />
        <Route path="/about" exact component={About} />
        <Route path="/business/:name" exact component={Business} />
        {/* <Route path="/introduce2" exact component={Introduce2} />
        <Route path="/introduce3" exact component={Introduce3} />
        <Route path="/introduce4" exact component={Introduce4} />
        <Route path="/introduce5" exact component={Introduce5} />
        <Route path="/introduce6" exact component={Introduce6} />
        <Route path="/introduce7" exact component={Introduce7} /> */}
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
