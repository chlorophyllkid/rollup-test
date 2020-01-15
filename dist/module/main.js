console.log('main');
import('./foo.chunk.js').then(function (_ref) {
  var foo = _ref["default"];
  return foo();
});
import('./bar.chunk.js').then(function (_ref2) {
  var bar = _ref2["default"];
  return bar();
});
