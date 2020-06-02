import React from 'react';
import { NormalField, SelectField } from './components/MUI_components';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };
    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (event) => {
    this.setState({ value: event.target.value });
  }

  onSubmit = (event) => {
    alert(this.state.value);
  }

  render() {
    const items = []
    for (let i = 0; i < 1; i++) {
      items.push(<NormalField name="The Field" onChange={this.onChange} />);
      items.push(<SelectField name="Select Field" onChange={this.onChange} />);
    }

    return (
      <form onSubmit={this.onSubmit} >
        {items}
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
