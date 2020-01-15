System.register([], function (exports, module) {
	'use strict';
	return {
		execute: function () {

			console.log('main');
			module.import('./foo.chunk.js').then(function (_ref) {
			  var foo = _ref["default"];
			  return foo();
			});
			module.import('./bar.chunk.js').then(function (_ref2) {
			  var bar = _ref2["default"];
			  return bar();
			});

		}
	};
});
