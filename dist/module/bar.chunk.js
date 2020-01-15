import { R as ReactDOM, a as React, _ as _inherits, b as _createClass, c as _classCallCheck, d as _possibleConstructorReturn, e as _getPrototypeOf } from './index.chunk.js';

function bar() {
  console.log('bar');
  var container = document.querySelector('#bar');
  ReactDOM.render(React.createElement(Bar, null), container);
}

var Bar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Bar, _React$Component);

  function Bar() {
    _classCallCheck(this, Bar);

    return _possibleConstructorReturn(this, _getPrototypeOf(Bar).apply(this, arguments));
  }

  _createClass(Bar, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, "Hello Bar!");
    }
  }]);

  return Bar;
}(React.Component);

export default bar;
