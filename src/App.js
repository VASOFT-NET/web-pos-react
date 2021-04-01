import React, { Component } from "react";
import Dashboard from "./pages/dashboard";
import Loading from "./pages/loading";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1000);
  }

  render() {
    return <>{this.state.loading ? <Loading /> : <Dashboard />}</>;
  }
}
