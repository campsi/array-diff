# Campsi's Array Diff
Diff two arrays and find the closest changes to apply.

## Usage
Array diff takes two parameters : prev and next, which have to be of array type
The function returns a list of changes. A change is a literal object with two properties, `oldIndex` and `newIndex` : 
* If `oldIndex` equals -1, it means that the element wasn't in the `prev` array, and thus has been added to `next`.
* If `newIndex` equals -1, it means that the element isn't in the `next` array, but was in the `prev`
* If `newIndex` equals `oldIndex`, no change

## Example

```js
var prev = ['foo', 'bar', {complex: true, property: 'foobar'}, 42];
var next = ['bar', 'foo', {property: 'foobar', complex: true}, 'ok'];
var diff = require('./index.js');
console.dir(diff(prev, next));
```

Will output :

```js
 [
 {oldIndex: 0, newIndex: 1},
 {oldIndex: 1, newIndex: 0},
 {oldIndex: 2, newIndex: 2},
 {oldIndex: 3, newIndex: -1},
 {oldIndex: -1, newIndex: 3}
 ] 
```


## Info
This array diff relies on [equals](https://github.com/jkroso/equals), it means it does not check the strict 
equality when it comes to object or array values inside the arrays.  