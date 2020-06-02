import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
import { List, Typography, Divider } from "antd";
import axios from "axios";

let serverAPI = "http://localhost:8000/api/forms";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handler = this.handler.bind(this);
    this.header = "Choose one of the forms below to start filling...";
    this.footer = "";
  }

  async componentDidMount() {
    axios
      .get(serverAPI)
      .then((response) => {
        let titles = [];
        for (let i = 0; i < response.data.forms.length; i++) {
          titles.push(response.data.forms[i].title);
        }
        this.setState({
          forms: response,
          titles: titles,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentWillUnmount() {}

  handler() {}

  render() {
    return (
      <Router>
        <Divider orientation="left">Forms</Divider>
        <List
          header={<div>{this.header}</div>}
          bordered
          dataSource={this.state.titles}
          renderItem={(item) => (
            <List.Item>
              <Link to="/api/forms/id">
                <Typography.Text mark>[ITEM]</Typography.Text> {item}
              </Link>
            </List.Item>
          )}
        />
        <Switch>
          <Route path="/api/forms/">
            <About />
          </Route>
        </Switch>
      </Router>
    );
  }
}
