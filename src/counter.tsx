import * as React from "react";

interface Counter {
  counter: number;
}
const Counter = (props: Counter) => {
  return <p>{props.counter}</p>;
};

export default Counter;
