import * as React from "react";
import Counter from "./counter";

interface IAppState {
  counter: number;
}
class App extends React.Component<{}, IAppState> {
  public state = { counter: 0 };
  public render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Counter counter={this.state.counter} />
        <button onClick={this.IncCounter}>Increment</button>
        <button onClick={this.DecCounter}>Decrement</button>
      </div>
    );
  }

  private IncCounter = () => {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 };
    });
  };

  private DecCounter = () => {
    this.setState(prevState => {
      return { counter: prevState.counter - 1 };
    });
  };
}
export default App;
