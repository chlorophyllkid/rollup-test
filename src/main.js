
console.log('main');

import('./foo.js').then(({ default: foo }) => foo());
import('./bar.js').then(({ default: bar }) => bar());
