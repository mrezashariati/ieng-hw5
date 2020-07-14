import React from "react";
import "antd/dist/antd.css";
import axios from "axios";
import { Form, Button } from "antd";
import MyDatePicker from "./datePicker";
import TextInput from "./textInput";
import NumericInput from "./numericInput";
import SubmitButton from "./submitButton";

let serverAPI = "http://localhost:8000/api/forms/";

let layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
};

let tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

let data = new Map();


export default class SingleForm extends React.Component {
  constructor(props) {
    super(props);
    this.txtOnChange = this.dataOnChange.bind(this);
    this.state = {
      form: "",
    };
  }

  onFinish = values => {
    alert('Submitted')
    console.log(values);
    console.log(Object.fromEntries(data));
  };

  onFinishFailed = errorInfo => {
    alert('Failed');
    console.log(errorInfo);
  };

  async componentDidMount() {
    axios
      .get(serverAPI.concat(this.props.match.params.id))
      .then((response) => {
        let items = [];
        for (let i = 0; i < response.data.fields.length; i++) {
          const element = response.data.fields[i];
          let item;
          switch (element.type) {
            case "Text":
              item = (
                <TextInput
                  name={element.name}
                  title={element.title}
                  options={element.options}
                  onChange={this.dataOnChange}
                ></TextInput>
              );
              break;
            case "Number":
              item = (
                <NumericInput
                  name={element.name}
                  title={element.title}
                  options={element.options}
                  onChange={this.dataOnChange}
                ></NumericInput >
              );
              break;
            case "Date":
              item = (
                <MyDatePicker
                  name={element.name}
                  title={element.title}
                  options={element.options}
                  onChange={this.dataOnChange}
                ></MyDatePicker>
              );
              break;
            case "Location":
              // TODO
              break;
            default:
          }
          items.push(
            <Form.Item
              label={element.title}
              name={element.title}
              rules={[{ required: element.required }]}
            >
              {item}
            </Form.Item>
          )
        }
        items.push(
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        )
        this.setState({ form: response.data, items: items });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentWillUnmount() { }

  dataOnChange = (name, value) => {
    data.set(name, value);
  }

  render() {
    return (<Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={this.onFinish}
      onFinishFailed={this.onFinishFailed}
    >
      {this.state.items}
    </Form>)
  }
}
