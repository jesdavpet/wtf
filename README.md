Type evaluation and comparison with Wtf.js
==========================================

  - Side steps JavaScript's inconsistent `typeof` and `instanceof` operators
  - Dependency free, and ultra lightweight at 0.3kb (minified)

JavaScript's native `typeof` operator can be awkward, it's one of the language's warts. Take for example `typeof null`, which one would expect to return `"Null"`, but is actually `"Object"`! Unfortunately `instanceof` is even less helpful than `typeof`.

This can lead to unnecessarily complex (and buggy) comparison statements.
*Enter Wtf.js to the rescue...*


Using Wtf.js type evaluation and predicates
-------------------------------------------

Predefined default types will return `true` / `false` indicating if the (optional) argument passed was of that type -- if no argument is passed, the type string for that type is returned instead:
  - `Wtf.ARRAY([thing])`
  - `Wtf.FUNCTION([thing])`
  - `Wtf.NULL([thing])`
  - `Wtf.NUMBER([thing])`
  - `Wtf.OBJECT([thing])`
  - `Wtf.STRING([thing])`
  - `Wtf.UNDEFINED([thing])`

Therefore, you can use these functions either as predicates or constants.

Test for an array type:
```
if (wtf.ARRAY(x)) {
  // etc.
}
```

Display the type of an unknown object for debugging: `console.log(wtf.type(thing))`

Handling a function argument which may be one of a variety of known types:
```
switch (wtf.type(thing)) {
    case wtf.STRING() : // Handle string case
        break;
    case wtf.NUMBER() : // Handle number case
        break;
    case wtf.ARRAY() : // Handle array case
        break;
    // etc.
}
```

Since custom objects / classes will evaluate as a Wtf.OBJECT(), the use of `instanceof` to narrow down the object's sub-type base on constructor as a second step.
```
if (wtf.OBJECT(x)) {
  if (x instanceof FancyClass) doFancyThings();
  // etc.
}
```


On **not** using Wtf.js
-----------------------

Common libraries such as: jQuery, Underscore or Lodash, etc. include type helper functions that accomplish the same thing -- use those instead.

**NOTE:** *Wtf.js is a reinvention of a very small wheel for a size optimized -- and, therefore, dependency-free -- JavaScript project. If that's your use case, then enjoy!*
