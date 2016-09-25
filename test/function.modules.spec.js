import { expect } from 'chai';

import { toArray, compose } from './../src/gaia';

describe('Gaia - Module Function', () => {
  describe('#toArray', () => {
    it('should convert the argument in array', () => {
      const list = function () { return toArray(arguments); };

      expect(list(1, 2, 3)).to.be.a('array');
      expect(list(1, 2, 3)).to.have.lengthOf(3);
    });
  });

  describe('#compose', () => {
    it('should compose the functions and execute', () => {
      const toLower = str => str.toLowerCase();
      const inArray = str => str.split('');
      const reverse = list => list.reverse();
      const array2string = list => list.join('');

      const fn1 = compose(toLower, inArray, reverse, array2string);
      const fn2 = compose(toLower);

      expect(fn1('SJAIAG')).to.equal('gaiajs');
      expect(fn2('GAIA')).to.equal('gaia');
    });
  });
});
