## Concise type evaluation and comparison in JavaScript with WTF.JS
  - Side steps JavaScript's flaky `typeof` and `instanceof` operators
  - Easy to use and extend with custom types
  - Dependency free, and ultra lightweight at 0.5kb (minified)
  - Works across all JavaScript environments


  JavaScript's native `typeof` operator can be awkward, it's one of the language's warts. Take for example `typeof null`, which one would expect to return `"Null"`, but is actually `"Object"`!
  Similarly, almost any class you define yourself will be considered just a generic object by `typeof`. Unfortunately `instanceof` is even less helpful than `typeof`.

  This can lead to unnecessarily complex (and buggy) comparison statements. Enter WTF.JS to the rescue...

#### Using WTF.JS
Test for an array type `if ( wtf.ARRAY( x ) ) { ... }`

Display the type of an unknown object for debugging `console.log( wtf.type( thing ) )`

#### Customizing WTF.JS
Adding a new type comparison function `wtf.add( 'UNICORN', new Unicorn() );`

`wtf.UNICORN( ladyRainicorn );` or `wtf.type( ladyRainicorn ) === wtf.UNICORN()`

###### I developed WTF.JS for a personal project. I suspect a smarter solution exists already... you should use that instead.
