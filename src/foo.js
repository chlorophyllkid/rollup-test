
import React from 'react';
import ReactDOM from 'react-dom';

export default function foo() {
  console.log('foo');

  const container = document.querySelector('#foo');
  ReactDOM.render(<Foo />, container);
}

class Foo extends React.Component {

  render() {
    return <div>Hello Foo!</div>;
  }
}
