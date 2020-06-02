import React from "react";
import "antd/dist/antd.css";
import axios from "axios";

let serverAPI = "http://localhost:8000/api/forms/";

export default class SingleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handler = this.handler.bind(this);
  }

  async componentDidMount() {
    axios
      .get(serverAPI.concat(this.props.id))
      .then((response) => {
          this.setState({form:JSON.stringify(response.data)})
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentWillUnmount() {}

  handler() {}

  render() {
    return (
      <p>
          {this.state.form}
      </p>
    );
  }
}
