import React, { Component } from "react";
import Loading from "./pages/loading";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    return <>{this.state.loading ? <Loading /> : <h1>OK</h1>}</>;
  }
}
