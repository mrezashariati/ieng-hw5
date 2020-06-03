import React from "react";
import "antd/dist/antd.css";
import axios from "axios";
import DatePicker from "./datePicker";
import TextInput from "./textInput";
import NumericInput from "./numericInput";
import SubmitButton from "./submitButton";

let serverAPI = "http://localhost:8000/api/forms/";

export default class SingleForm extends React.Component {
  constructor(props) {
    super(props);
    this.txtOnChange = this.txtOnChange.bind(this);
    this.state = {
      form: "",
    };
  }

  async componentDidMount() {
    axios
      .get(serverAPI.concat(this.props.match.params.id))
      .then((response) => {
        let items = [];
        for (let i = 0; i < response.data.fields.length; i++) {
          const element = response.data.fields[i];
          switch (element.type) {
            case "Text":
              items.push(
                <TextInput
                  name={element.name}
                  title={element.title}
                  required={element.required}
                  options={element.options}
                  onChange={this.txtOnChange}
                ></TextInput>
              );
              break;
            case "Number":
              // code block
              break;
            case "Date":
              // code block
              break;
            case "Location":
              // code block
              break;
          }
        }
        this.setState({ form: response.data, items: items });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentWillUnmount() {}

  txtOnChange(event){
    console.log(event.target.value)
  }

  render() {
    return <p>{this.state.items}</p>;
  }
}
