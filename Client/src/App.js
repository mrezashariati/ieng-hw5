import React from 'react';
import { NormalField, SelectField } from './components';

function App() {
  const items = []

  for (let i = 0; i < 1; i++) {
    items.push(<NormalField />);
    items.push(<SelectField />);
  }

  return (
    <form noValidate autoComplete="off">
      {items}
    </form>
  );
}

export default App;
