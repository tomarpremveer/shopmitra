import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions/Index";
class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "1093128728580-23i5s0n6l5ft8efiipfhn9t9qhst9er2.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        })
        .catch((err) => {
          this.errors = err;
        });
    });
  }
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };
  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };
  renderButton = () => {
    const buttonClass = this.props.isSignedIn
      ? "ui red button"
      : "ui primary button";
    if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className={buttonClass}>
          Sign Out
        </button>
      );
    } else if (!this.props.isSignedIn) {
      return (
        <button onClick={this.onSignInClick} className={buttonClass}>
          Sign In
        </button>
      );
    }
  };
  render() {
    return <div className="">{this.renderButton()}</div>;
  }
}
const mapStateToProps = (state) => {
  const { user } = state;
  return { isSignedIn: user.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
