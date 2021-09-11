import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import CollectionPage from "./pages/collectionpage/collectionpage.component";
import Header from "./components/header/header.component";
// import { auth, createUserProfileDocument } from './firebase/firebase.utils';
// import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            {/* <Redirect exact from="/" to="/" /> */}
            <Route exact path="/" component={HomePage} />
            <Route path="/collection" component={CollectionPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
