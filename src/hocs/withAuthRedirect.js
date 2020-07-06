import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const mapStateToPropsForRedirect = (state) => ({
  isLogined: state.auth.isLogined,
});

export const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    if (!props.isLogined) {
      return <Redirect to="/auth" />;
    }
    return <Component {...props} />;
  };

  let ConnectedAuthRedirectComponent = connect(
    mapStateToPropsForRedirect,
    null
  )(RedirectComponent);

  return ConnectedAuthRedirectComponent;
};
