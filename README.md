### "wtf.js": mind-numbingly simple, simplifies type comparison in JavaScript.
  - *Reliably* compares types by sidestepping JavaScript's flaky `typeof` operator
  - Easy to use, and extend with custom types (including non-primitive objects)
  - Free of dependencies, and *ultra lightweight* at 0.3kb minified
  - Works across all JavaScript environments

#### `is( thing [, type] )`
`wtf.is( thing );` returns the string representation for type of `thing`.

`wtf.is( thing, type );` returns a boolean indicating if `thing` is of `type`.

`wtf['THING'] = wtf.is( thing );` extend `wtf`'s types by assigning to a constant for use later.

### `allAre( things [, type] )`
`wtf.allAre( things );` returns a boolean indicating if all elements in **array** `things` are of the same *arbitrary* type.

`wtf.allAre( things, wtf.THING );` returns a boolean indicating if all elements in **array** `things` are of the type represented by `wtf.THING`.

### `wtf`'s default primitive types
  - `ARRAY` the type of a scalar array
  - `FUNCTION` the type of a function
  - `NULL` the type of a null value
  - `NUMBER` the type of a number (floating point, or integer)
  - `STRING` the type of a string
  - `UNDEFINED` the type of an undefined value
