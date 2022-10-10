import React, { Component } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

class ThemeToggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "dark",
    };
  }

  changeTheme(value) {
    this.setState(() => {
      return {
        theme: value,
      };
    });
    const root = window.document.documentElement;
    root.setAttribute("data-theme", value);
    localStorage.setItem("theme", value);
  }

  componentDidMount() {
    document.documentElement.setAttribute("data-theme", localStorage.theme);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      if (localStorage.theme) {
        this.setState(() => {
          return {
            theme: localStorage.theme,
          };
        });
      } else {
        localStorage.setItem("theme", "dark");
        this.setState(()=>{
          return {
            theme: "dark",
          };
        });
      }
    }
  }

  render() {
    return (
      <button
        type="button"
        className="nav-icon"
        onClick={() =>
          this.changeTheme(localStorage.theme === "dark" ? "light" : "dark")
        }
      >
        {localStorage.theme === "dark" ? <BiSun /> : <BiMoon />}
      </button>
    );
  }
}

export default ThemeToggler;
