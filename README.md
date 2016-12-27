Type evaluation and comparison with WTF.JS
==========================================

  - Side steps JavaScript's inconsistent `typeof` and `instanceof` operators
  - Dependency free, and ultra lightweight at 0.3kb (minified)

JavaScript's native `typeof` operator can be awkward, it's one of the language's warts. Take for example `typeof null`, which one would expect to return `"Null"`, but is actually `"Object"`! Unfortunately `instanceof` is even less helpful than `typeof`.

This can lead to unnecessarily complex (and buggy) comparison statements.
*Enter WTF.JS to the rescue...*


Using WTF.JS type evaluation and predicates
-------------------------------------------

Test for an array type: `if (wtf.ARRAY(x)) { ... }`

Display the type of an unknown object for debugging: `console.log(wtf.type(thing))`

Handling a function argument which may be one of a variety of known types:
```
switch (wtf.type(thing)) {
    case wtf.STRING() : // Handle strings
        break;
    case wtf.NUMBER() : // Handle numbers
        break;
    case wtf.ARRAY() : // Handle arrays
        break;
    // Etc.
}
```


On **not** using WTF.JS
-----------------------

Common libraries such as: jQuery, Underscore or Lodash, etc. include type helper functions that accomplish the same thing -- use those instead.

**NOTE:** *WTF.JS is a reinvention of the wheel for a size optimized -- and, therefore, dependency-free -- JavaScript project. If that's your use case, then enjoy!*
