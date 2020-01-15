System.register(['./index.chunk.js'], function (exports) {
  'use strict';
  var ReactDOM, React, _inherits, _createClass, _classCallCheck, _possibleConstructorReturn, _getPrototypeOf;
  return {
    setters: [function (module) {
      ReactDOM = module.R;
      React = module.a;
      _inherits = module._;
      _createClass = module.b;
      _classCallCheck = module.c;
      _possibleConstructorReturn = module.d;
      _getPrototypeOf = module.e;
    }],
    execute: function () {

      exports('default', bar);

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

    }
  };
});
