import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    const path = this.props.location.pathname.slice(1);
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>{path.toUpperCase()}</h1>
      </div>
    );
  }
}

export default withRouter(Header);
