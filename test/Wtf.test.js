var expect = require('chai').expect
var Wtf = require('../src/Wtf.js')

describe('Wtf', function () {
  var DEFAULT_TYPES = [
    { name: 'ARRAY',      type: '[object Array]',     exemplar: [] },
    { name: 'FUNCTION',   type: '[object Function]',  exemplar: function () {} },
    { name: 'NULL',       type: '[object Null]',      exemplar: null },
    { name: 'NUMBER',     type: '[object Number]',    exemplar: 42 },
    { name: 'OBJECT',     type: '[object Object]',    exemplar: {} },
    { name: 'STRING',     type: '[object String]',    exemplar: 'Abc' },
    { name: 'UNDEFINED',  type: '[object Undefined]', exemplar: undefined },
  ]

  var wtf = null
  beforeEach(function () { wtf = new Wtf() })

  it('should have add(...) and type(...) methods', function () {
    expect(wtf).to.have.ownProperty('add')
    expect(wtf).to.have.ownProperty('type')
  })

  it('should have common default type comparison methods', function () {
    DEFAULT_TYPES.forEach(function (t, index, types) {
      expect(wtf).to.have.ownProperty(t.name)
      expect(wtf[t.name]()).to.equal(t.type)
      expect(wtf[t.name](t.exemplar)).to.be.true

      var rotatedIndex = (index+2) % (types.length)
      var mismatched = types[rotatedIndex]
      expect(wtf[t.name]()).not.to.equal(mismatched.type)
    })
  })


  describe('.add( ... )', function () {
    it('should add a comparison function for the type', function () {
      wtf.add('WTF', wtf)

      expect(wtf).to.have.ownProperty('WTF')
      expect(wtf.WTF(wtf)).to.be.true
    })
  })


  describe('.type( ... )', function () {
    it('should return a type string matching checked type', function () {
      DEFAULT_TYPES.forEach(function (t) {
        expect(wtf.type(t.exemplar)).to.equal(t.type)
      })
    })
  })

})
