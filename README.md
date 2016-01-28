## Concise type evaluation and comparison in JavaScript with WTF.JS
  - Side steps JavaScript's flaky `typeof` and `instanceof` operators
  - Easy to use and extend with custom types
  - Dependency free, and ultra lightweight at 0.5kb (minified)
  - Works across all JavaScript environments



JavaScript's native `typeof` operator can be awkward, it's one of the language's warts. Take for example `typeof null`, which one would expect to return `"Null"`, but is actually `"Object"`!
Similarly, almost any class you define yourself will be considered just a generic object by `typeof`. Unfortunately `instanceof` is even less helpful than `typeof`.


This can lead to unnecessarily complex (and buggy) comparison statements. Enter WTF.JS to the rescue...

#### Using WTF.JS type evaluation and predicates
Test for an array type: `if ( wtf.ARRAY( x ) ) { ... }`

Display the type of an unknown object for debugging: `console.log( wtf.type( thing ) )`

Handling a function argument which may be one of a variety of known types:
```
switch ( wtf.type( thing ) ) {
    case wtf.STRING() : // Handle strings
        break;
    case wtf.NUMBER() : // Handle numbers
        break;
    case wtf.ARRAY() : // Handle arrays
        break;
    // Etc.
}
```

#### Customizing WTF.JS
Add a new type comparison function using an example class is simple: `wtf.add( 'SITH', new Sith( 'Vader' ) );`


Then, use the new comparison function to compare types:
`wtf.SITH( kyloRen );` or `wtf.type( kyloRen ) === wtf.SITH()`
