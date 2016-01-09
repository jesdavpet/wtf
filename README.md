## WTF.JS simplifies handling types in JavaScript.
  - *Reliably* compares types by sidestepping JavaScript's flaky `typeof` and `instanceof` operators
  - Easy to use, and extend with custom types (including non-primitive objects)
  - Free of dependencies, and ultra lightweight at 0.5kb minified
  - Works across all JavaScript environments

  JavaScript's native `typeof` operator can be awkward, it's one of the language's warts. Take for example `typeof null`, which one would expect to return `"Null"`, but is actually `"Object"`! *How fun.*

  Similarly, almost any class you define yourself will be considered just a generic object by `typeof`. Unfortunately `instanceof` is even less helpful than `typeof`. Enter WTF.JS to the rescue...

#### Wheel, reinvented...?
  I developed "wtf.js" for a personal project. However, I suspect a smarter solution exists already... use that instead.
