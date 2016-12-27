/**
 * @author Jesse David Peterson <@jesdavpet> (http://www.jes.dav.pet)
 * Concise type evaluation and comparison in JavaScript.
 */
module.exports = function Wtf () {
'use strict'

  var defaultTypes = {
    'ARRAY':      [],
    'FUNCTION':   function () {},
    'NULL':       null,
    'NUMBER':     42,
    'OBJECT':     {},
    'STRING':     'abc',
    'UNDEFINED':  undefined,
  }

  /**
   * Evaluates the type of an object.
   * @param {*} thing - the thing to evaluate the type of
   * @returns {string}
   */
  this.type = function (thing) {
    return Object.prototype.toString.call(thing)
  }

  /**
   * Adds a custom function, which evaluates equality of other objects.
   * @param {string} name - the name of function to be added
   * @param {*} exemplar - an object of the type to be evaluated
   */
  this.add = function (name, exemplar) {
    var typeName = this.type(exemplar)
    // Add the function to the export object.
    this[name] = function (thing) {
      return (arguments.length === 0) ? typeName : this.type(thing) === typeName
    }

    return this
  }

  for (var t in defaultTypes) this.add(t, defaultTypes[t])

  return this
}
