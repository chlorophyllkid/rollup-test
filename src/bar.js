import React from 'react';
import ReactDOM from 'react-dom';

export default function bar() {
  console.log('bar');

  const container = document.querySelector('#bar');
  ReactDOM.render(<Bar />, container);
}

class Bar extends React.Component {

  render() {
    return <div>Hello Bar!</div>;
  }
}