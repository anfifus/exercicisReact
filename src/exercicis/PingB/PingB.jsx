/* import React from "react";


class PingB extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }


    componentDidMount() {
        setTimeout(() => {
            this.setState({ count: this.state.count + 1 });
        }, 2000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevProps, prevState, snapshot)
    }

    render() {
        return <h1>I have counted {this.state.count} times!</h1>;
    }
}

export default PingB; */

import { useEffect, useState } from "react";

function PingB() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
    console.log("Amb el useEffect -->", count);
  }, [count]);
  let count1 = 0;
  setTimeout(() => {
    setCount(count1 + 1);
    console.log("contador1", count1);
  }, 2000);

  return <h1>I have counted {count} times!</h1>;
}
export default PingB;
