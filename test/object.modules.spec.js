import { expect } from 'chai';

import { each, getType, isType } from './../src/gaia';

describe('Gaia - Module Object', () => {
  describe('#each', () => {
    it('should iterate the object', () => {
      let sum = 0;
      const object = {
        a: 1,
        b: 2,
        c: 3,
      };

      each(object, (value) => {
        sum += value;
      });

      expect(sum).to.equal(6);
    });
  });

  describe('#getType', () => {
    it('should return the types of the values', () => {
      expect(getType([])).to.equal('Array');
      expect(getType([])).to.not.equal('Error');

      expect(getType(false)).to.equal('Boolean');
      expect(getType(true)).to.not.equal('Object');

      expect(getType(Error())).to.equal('Error');
      expect(getType(Error())).to.not.equal('Function');

      expect(getType(() => {})).to.equal('Function');
      expect(getType(() => {})).to.not.equal('Object');

      expect(getType(null)).to.equal('Null');
      expect(getType(null)).to.not.equal('Object');

      expect(getType(0)).to.equal('Number');
      expect(getType(0)).to.not.equal('Boolean');

      expect(getType({})).to.equal('Object');
      expect(getType({})).to.not.equal('Array');

      expect(getType('')).to.equal('String');
      expect(getType('')).to.not.equal('Number');
    });
  });

  describe('#isType', () => {
    it('should test if type the value is an Array', () => {
      expect(isType([], 'array')).to.equal(true);
      expect(isType([], 'object')).to.equal(false);
    });

    it('should test if type the value is an ArrayBuffer', () => {
      expect(isType(new ArrayBuffer, 'arraybuffer')).to.equal(true);
      expect(isType(new ArrayBuffer, 'array|object')).to.equal(false);
    });

    it('should test if type the value is a Bollean', () => {
      expect(isType(false, 'boolean')).to.equal(true);
      expect(isType(true, 'string')).to.equal(false);
    });

    it('should test if type the value is a Date', () => {
      expect(isType(new Date(), 'date')).to.equal(true);
      expect(isType(new Date(), 'function|string')).to.equal(false);
    });

    it('should test if type the value is an Error', () => {
      expect(isType(new Error(), 'error')).to.equal(true);
      expect(isType(new Error(), 'function|object')).to.equal(false);
    });

    it('should test if type the value is a Function', () => {
      expect(isType(function () {}, 'function')).to.equal(true);
      expect(isType(() => {}, 'function')).to.equal(true);
      expect(isType(function () {}, 'func')).to.equal(false);
      expect(isType(() => {}, 'object')).to.equal(false);
    });

    it('should test if type the value is a Map', () => {
      expect(isType(new Map(), 'map')).to.equal(true);
      expect(isType(new Map(), 'array|object')).to.equal(false);
    });

    it('should test if type the value is a Number', () => {
      expect(isType(0, 'number')).to.equal(true);
      expect(isType(NaN, 'number')).to.equal(true);
      expect(isType(Infinity, 'number')).to.equal(true);
      expect(isType(0, 'boolean')).to.equal(false);
      expect(isType(NaN, 'object')).to.equal(false);
    });

  });
});
