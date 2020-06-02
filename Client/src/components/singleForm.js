import React from "react";
import "antd/dist/antd.css";
import axios from "axios";

let serverAPI = "http://localhost:8000/api/forms/";

export default class SingleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        form:"",
        title:""
    };
    this.handler = this.handler.bind(this);
  }

  async componentDidMount() {
    axios
      .get(serverAPI.concat(this.props.match.params.id))
      .then((response) => {
          this.setState({form:response.data,
        title:response.data.title})
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async componentDidUpdate(){
    axios
    .get(serverAPI.concat(this.props.match.params.id))
    .then((response) => {
        this.setState({form:response.data,
      title:response.data.title})
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
          {JSON.stringify(this.state.form)}
      </p>
    );
  }
}
