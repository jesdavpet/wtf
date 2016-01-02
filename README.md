### "wtf.js": mind-numbingly simple, simplifies type comparison in JavaScript.
- *Reliably* compares types by sidestepping JavaScript's flaky `typeof` operator
- Easy to use, and extend with custom types (including non-primitive)
- Free of dependencies, and *ultra lightweight* at 0.3kb minified!

#### `is( thing [, type] )`
`wtf.is( thing );` returns the string representation for type of `thing`.
Extend `wtf`'s canned types by assigning this to a constant for use later: `wtf['THING'] = wtf.is( thing );`

`wtf.is( thing, type );` returns a boolean indicating if `thing` is of `type`.

#### `allAre( things [, type] )`
`wtf.allAre( things );` returns a boolean indicating if all elements in **array** `things` are of the same *arbitrary* type.

`wtf['THING'] = wtf.is( thing );`
`wtf.allAre( things, wtf.THING );` returns a boolean indicating if all elements in **array** `things` are of the type represented by `wtf.THING`.

#### `wtf`'s default types
  - `ARRAY` the type of a scalar array
  - `FUNCTION` the type of a function
  - `NULL` the type of a null value
  - `NUMBER` the type of a number (floating point, or integer)
  - `STRING` the type of a string
  - `UNDEFINED` the type of an undefined value

#### The wheel, reinvented!
Disclaimer: I developed this (marginally useful) module for some personal projects, and experiments, in vanilla JavaScript. Nothing special, but *it works*. So feel free to use it too, and save yourself a few keystrokes.
