import React from "react";
import { DatePicker } from "antd";
import "antd/dist/antd.css";

export default class MyDatePicker extends React.Component {

  render() {
    return <DatePicker 
            onChange={this.props.onChange} 
            addonBefore={this.props.title}
           />;
  }
}
