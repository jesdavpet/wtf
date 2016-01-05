## "wtf.js" makes reasoning about types in JavaScript less frustrating
  - *Reliably* compares types by sidestepping JavaScript's flaky `typeof` and `instanceof` operators
  - Easy to use, and extend with custom types (including non-primitive objects)
  - Free of dependencies, and *ultra lightweight* at 0.3kb minified
  - Works across all JavaScript environments

  JavaScript's native `typeof` operator can be awkward, it's one of the language's warts. Take for example `typeof null`, which one would expect to return `"Null"`, but is actually `"Object"`! *How exciting.*

  Similarly, almost any class you define yourself will be considered just a generic `"Object"` by `typeof`. Unfortunately `instanceof` is even less helpful than `typeof`. **wtf.js** to the rescue...

#### `type( thing )`
    - `wtf.type( thing );` returns the string representation for type of `thing`.

#### `is( thing, type )`
  - `wtf.is( thing, type );` returns a boolean indicating if `thing` is of `type`.

#### `are( things [, type] )`
  - `wtf.are( things );` returns a boolean indicating if all elements in **array** `things` are of a matching *arbitrary* type.
  - `wtf.are( things, wtf.THING );` returns a boolean indicating if all elements in **array** `things` are of type `wtf.THING`.

#### `wtf`'s default primitive types
  - `ARRAY` the type of a scalar array
  - `FUNCTION` the type of a function
  - `NULL` the type of a null value
  - `NUMBER` the type of a number (floating point, or integer)
  - `STRING` the type of a string
  - `UNDEFINED` the type of an undefined value

#### Extending `wtf` with custom object types
  ```
  var thing = new Thing();
  wtf['THING'] = wtf.type( thing );
  ```
  extends `wtf` object's types by assigning to a constant for use later.

#### Wheel, reinvented...
  I developed "wtf.js" to simplify type comparison in some of my own personal projects, however, I suspect a more clever solution exists already.
