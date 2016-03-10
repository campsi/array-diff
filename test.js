var prev = ['foo', 'bar', {complex: true, property: 'foobar'}, 42];
var next = ['bar', 'foo', {property: 'foobar', complex: true}, 'ok'];
var diff = require('./index.js');

console.dir(diff(prev, next));

/******* Output ***********
 [
 {oldIndex: 0, newIndex: 1},
 {oldIndex: 1, newIndex: 0},
 {oldIndex: 2, newIndex: 2},
 {oldIndex: 3, newIndex: -1},
 {oldIndex: -1, newIndex: 3}
 ]

 */