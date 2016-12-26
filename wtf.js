/**
 * @author Jesse Peterson [@jesdavpet]
 * @version 0.2
 * Concise type evaluation and comparison in JavaScript.
 */
var wtf = wtf || (function (types) {
    'use strict'

    /**
     * Evaluates the type of an object.
     * @param {*} thing - the thing to evaluate the type of
     * @returns {string}
     */
    function type (thing) { return Object.prototype.toString.call(thing) }

    /**
     * Adds a custom function, which evaluates equality of other objects.
     * @param {string} name - the name of function to be added
     * @param {*} exemplar - an object of the type to be evaluated
     */
    function add (name, exemplar) {
        var typeString = type(exemplar)
        // Add the function to the export object.
        exports[name] = function (thing) {
            return (arguments.length === 0) ? typeString : type(thing) === typeString
        }
    }

    var exports = {
        'type': type,
        'add':  add,
    }

    types = types || {}
    for (var t in types) {
        if (types.hasOwnProperty(t)) exports.add(t, types[t])
    }

    return exports
}({
    'ARRAY': [],
    'ERROR': new Error(),
    'FUNCTION': function () {},
    'NULL': null,
    'NUMBER': 42,
    'OBJECT': {},
    'STRING': 'abc',
    'UNDEFINED': undefined,
}))
