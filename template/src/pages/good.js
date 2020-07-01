import React from "react";
import { connect } from "react-redux";

@connect(
  (state) => ({
    dolphins: state.dolphins,
  }),
  (dispatch) => ({
    incrementDolphins: dispatch.dolphins.increment,
    incrementDolphinsAsync: dispatch.dolphins.incrementAsync,
  })
)
class Count extends React.PureComponent {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: 120 }}>
          <h3>Dolphins</h3>
          <h1>{this.props.dolphins}</h1>
          <button type="button" onClick={this.props.incrementDolphins}>
            +1
          </button>
          <button type="button" onClick={this.props.incrementDolphinsAsync}>
            Async +1
          </button>
        </div>
      </div>
    );
  }
}

export default Count;
