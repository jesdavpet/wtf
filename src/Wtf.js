/**
 * @author Jesse David Peterson <@jesdavpet> (http://www.jes.dav.pet)
 * Concise type evaluation and comparison in JavaScript.
 */
module.exports = (function wtf () {
'use strict'

  var exports = {
    add:  add,
    type: type,
  }

  var DEFAULT_TYPES = {
    'ARRAY':      [],
    'FUNCTION':   function () {},
    'NULL':       null,
    'NUMBER':     42,
    'OBJECT':     {},
    'STRING':     'abc',
    'UNDEFINED':  undefined
  }

  /**
   * Evaluates the type of an object.
   * @param {*} thing - the thing to evaluate the type of
   * @returns {string}
   */
  function type (thing) {
    return Object.prototype.toString.call(thing)
  }

  /**
   * Adds a custom function, which evaluates equality of other objects.
   * @param {string} name - the name of function to be added
   * @param {*} exemplar - an object of the type to be evaluated
   */
  function add (name, exemplar) {
    var typeName = type(exemplar)
    // Add the function to the export object.
    exports[name] = function (thing) {
      return (arguments.length === 0) ? typeName : type(thing) === typeName
    }
  }

    for (var t in DEFAULT_TYPES) exports.add(t, DEFAULT_TYPES[t])

  return exports
}())
