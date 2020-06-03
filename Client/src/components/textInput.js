import React from "react";
import ReactDOM from "react-dom";
import { Input } from "antd";
import "antd/dist/antd.css";

export default class TextInput extends React.Component {
  constructor(props) {
    super(props);
    console.log(typeof(props.txtOnChange))
  }

  componentWillUnmount() {}

  handler() {
  }

  render() {
    return (
      <Input
        placeholder="input text"
        addonBefore={this.props.title}
        maxLength={50}
        onChange={(event)=>this.props.onChange(event)}
      />
    );
  }
}
