import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import { List, Typography, Divider } from "antd";
import axios from "axios";
import SingleForm from "./singleForm";

let serverAPI = "http://localhost:8000/api/forms";

export default class PGApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title_id: [] };
    this.handler = this.handler.bind(this);
    this.header = "Choose one of the forms below to start filling...";
    this.footer = "";
  }

  async componentDidMount() {
    axios
      .get(serverAPI)
      .then((response) => {
        let titles = [];
        let ids = [];
        for (let i = 0; i < response.data.forms.length; i++) {
          titles.push(response.data.forms[i].title);
          ids.push(response.data.forms[i].id);
        }
        let title_id = titles.map(function (t, i) {
          return [t, ids[i]];
        });

        this.setState({
          forms: response,
          title_id: title_id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentWillUnmount() { }

  handler() { }

  getRoutes() {
    let routes = [];
    for (let i = 0; i < this.state.title_id.length; i++) {
      routes.push(
        <Route path={"/api/forms/:id"} component={SingleForm} />
      );
    }
    return routes
  }

  render() {
    return (
      <Router>
        <Divider orientation="left">Forms</Divider>
        <List
          header={<div>{this.header}</div>}
          bordered
          dataSource={this.state.title_id}
          renderItem={(item) => (
            <List.Item>
              <Link to={"/api/forms/".concat(item[1])}>
                <Typography.Text mark>[ITEM]</Typography.Text>{" "}
                {`${item[0]} (ID:${item[1]})`}
              </Link>
            </List.Item>
          )}
        />
        <br/>
        <Switch>{this.getRoutes()}</Switch>
      </Router>
    );
  }
}
