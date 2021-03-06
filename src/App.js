import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import CollectionPage from "./pages/collectionpage/collectionpage.component";
import Header from "./components/header/header.component";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/collection" component={CollectionPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
