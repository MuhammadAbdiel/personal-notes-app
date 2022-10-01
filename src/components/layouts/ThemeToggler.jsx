import React, { Component } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

class ThemeToggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "dark",
    };
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme(value) {
    this.setState({ theme: value });
    const root = window.document.documentElement;
    root.setAttribute("data-theme", value);
    localStorage.setItem("theme", value);
  }

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return <div>ThemeToggler</div>;
  }
}

export default ThemeToggler;
