import React from "react";

class GoogleAuth extends React.Component {
  state = { isLoggedIn: null };
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
          this.setState({ isLoggedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.renderButton);
        })
        .catch((err) => {
          this.errors = err;
        });
    });
  }
  onSignInClick = () => {
    this.auth.signIn();
  };
  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderButton = () => {
    const buttonClass = this.state.isLoggedIn
      ? "ui red button"
      : "ui primary button";
    if (this.state.isLoggedIn) {
      return (
        <button onClick={this.onSignOutClick} className={buttonClass}>
          Sign Out
        </button>
      );
    } else if (!this.state.isLoggedIn) {
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

export default GoogleAuth;
