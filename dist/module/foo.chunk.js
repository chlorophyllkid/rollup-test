import { R as ReactDOM, a as React, _ as _inherits, b as _createClass, c as _classCallCheck, d as _possibleConstructorReturn, e as _getPrototypeOf } from './index.chunk.js';

function foo() {
  console.log('foo');
  var container = document.querySelector('#foo');
  ReactDOM.render(React.createElement(Foo, null), container);
}

var Foo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Foo, _React$Component);

  function Foo() {
    _classCallCheck(this, Foo);

    return _possibleConstructorReturn(this, _getPrototypeOf(Foo).apply(this, arguments));
  }

  _createClass(Foo, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, "Hello Foo!");
    }
  }]);

  return Foo;
}(React.Component);

export default foo;
