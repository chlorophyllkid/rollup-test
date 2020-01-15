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

      exports('default', foo);

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

    }
  };
});
