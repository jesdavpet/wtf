const { expect, assert } = require('chai')
const Wtf = require('../src/Wtf.js')

describe('Wtf', () => {
    const DEFAULT_TYPES = [
        { name: 'ARRAY',      type: '[object Array]',       exemplar: [] },
        { name: 'FUNCTION',   type: '[object Function]',    exemplar: (() => {}) },
        { name: 'NULL',       type: '[object Null]',        exemplar: null },
        { name: 'NUMBER',     type: '[object Number]',      exemplar: 42 },
        { name: 'OBJECT',     type: '[object Object]',      exemplar: {} },
        { name: 'STRING',     type: '[object String]',      exemplar: 'Abc' },
        { name: 'UNDEFINED',  type: '[object Undefined]',   exemplar: undefined },
    ]

    let wtf = null
    beforeEach(() => { wtf = new Wtf() })

    it('should have add(...) and type(...) methods', () => {
        expect(wtf).to.have.ownProperty('add')
        expect(wtf).to.have.ownProperty('type')
    })

    it('should have common default type comparison methods', () => {
        DEFAULT_TYPES.forEach((t, index, types) => {
            expect(wtf).to.have.ownProperty(t.name)
            expect(wtf[t.name]()).to.equal(t.type)
            expect(wtf[t.name](t.exemplar)).to.be.true

            let rotatedIndex = (index+2) % (types.length)
            let mismatched = types[rotatedIndex]
            expect(wtf[t.name]()).not.to.equal(mismatched.type)
        })
    })


    describe('.add( ... )', () => {
        it('should add a comparison function for the specified type', () => {
            wtf.add('WTF', wtf)

            expect(wtf).to.have.ownProperty('WTF')
            expect(wtf.WTF(wtf)).to.be.true
        })
    })


    describe('.type( ... )', () => {
        it('should return a type string that matches the type being investigated', () => {
            DEFAULT_TYPES.forEach((t) => { expect(wtf.type(t.exemplar)).to.equal(t.type) })
        })
    })

})
