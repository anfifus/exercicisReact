import { Link } from "react-router-dom";

import { Component } from "react";
class WindowA extends Component {
  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth };
    this.handleResize = this.handleResize.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    console.log("Eliminando listener en A");
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    return (
      <div>
        <p>{this.state.width}</p>
        <ul>
          <li>
            <Link to="/exercicis/WindowB/WindowB">WindowB</Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default WindowA;
