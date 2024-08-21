import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import SignInPage from "./SignInPage";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <ProtectedRoute path="/profile" component={ProfilePage} />
        <Route path="/signin" component={SignInPage} />
      </Switch>
    </Router>
  );
}

export default App;
