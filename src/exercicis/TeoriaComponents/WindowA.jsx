/* import {useEffect, useState} from "react";

function WindowB() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);  // Funcio
        window.addEventListener('resize', handleResize); // Component did mount
        return () => { // Component did unmoun
            window.removeEventListener('resize', handleResize);
        };
    });

    return width;
}

export default WindowB; */
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
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    return (
      <div>
        <p>{this.state.width}</p>
      </div>
    );
  }
}
export default WindowA;
