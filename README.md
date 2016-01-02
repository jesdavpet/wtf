## WTF.js
#### A mind-numbingly simple utility module, which simplifies type comparison in JavaScript.
- Free of dependencies, and *ultra lightweight* at 0.3kb minified!
- Works across all JavaScript environments
- Easy to use, and extend with custom types

### `is( thing [, type] )`
`WTF.is( thing );` returns String representation for type of `thing`.
Extend WTF's canned types by assigning this to a constant for use later:
`WTF['THING'] = WTF.is( thing );`

`WTF.is( thing, type );` returns a boolean indicating if `thing` is of `type`.

### `allAre( things [, type] )`
`var things = [ ... ];`
`WTF.allAre( things );` returns a boolean indicating if all elements in `things` are of the same *arbitrary* type.

`var things = [ ... ];`
`WTF['THING'] = WTF.is( thing );`
`WTF.allAre( things, WTF.THING );` returns a boolean indicating if all elements in `things` are of the type represented by `WTF.THING`.

### `WTF`'s default types
  - `ARRAY` the type of a scalar array
  - `FUNCTION` the type of a function
  - `NULL` the type of a null value
  - `NUMBER` the type of a number (floating point, or integer)
  - `STRING` the type of a string
  - `UNDEFINED` the type of an undefined value
