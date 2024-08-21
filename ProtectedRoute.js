import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Assume you have an AuthContext

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        );
      }}
    />
  );
};

export default ProtectedRoute;
