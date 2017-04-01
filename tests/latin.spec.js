/*jshint esversion: 6 */
const chai = require('chai');
const expect = chai.expect;

const piggy = require('../app.js');

describe('piggy function', () => {

  it('should be function', () => {
    expect(piggy).to.be.a('function');
  });

  it('should return an object', function (){
    expect(piggy()).to.be.an('object');
  });

});

describe('Piggy functions', function () {

  beforeEach(function () {
    newPiggy = piggy();
  });

  describe('#pigLatin', function () {
    it('should be a function available on a new calculator object', function () {
      expect(newPiggy.pigLatin).to.be.a('function');
      expect(GLOBAL.pigLatin).to.be.undefined;
    });
    it('should translate a normal string to Pig Latin string', function () {
      expect(newPiggy.pigLatin("pig")).to.equal("ig-pay");
      expect(newPiggy.pigLatin("banana")).to.equal("anana-bay");
      expect(newPiggy.pigLatin("wet")).to.equal("et-way");
      expect(newPiggy.pigLatin("smile")).to.equal("ile-smay");
      expect(newPiggy.pigLatin("island")).to.equal("island-ay");
    });
    it('should throw an error if a number is entered', function () {
      expect(newPiggy.pigLatin.bind(null,8)).to.throw("Please enter a valid string");
      expect(newPiggy.pigLatin.bind(null,"Bonjour_%")).to.throw("Please enter a valid string");
      expect(newPiggy.pigLatin.bind(null,"@Bonjour")).to.throw("Please enter a valid string");
    });
  });

  describe('#pigLatinReverse', function () {
    it('should be a function available on a new calculator object', function () {
      expect(newPiggy.pigLatinReverse).to.be.a('function');
      expect(GLOBAL.pigLatinReverse).to.be.undefined;
    });
    it('should translate a Pig Latin string to normal string', function () {
      expect(newPiggy.pigLatinReverse("ig-pay")).to.equal("pig");
      expect(newPiggy.pigLatinReverse("anana-bay")).to.equal("banana");
      expect(newPiggy.pigLatinReverse("et-way")).to.equal("wet");
      expect(newPiggy.pigLatinReverse("ile-smay")).to.equal("smile");
      expect(newPiggy.pigLatinReverse("island-ay")).to.equal("island");
    });
    it('should throw an error if not a Pig Latin word is entered', function () {
      expect(newPiggy.pigLatinReverse.bind(null,8)).to.throw("Please enter a valid Pig Latin word");
      expect(newPiggy.pigLatinReverse.bind(null,"Bonjour_%")).to.throw("Please enter a valid Pig Latin word");
      expect(newPiggy.pigLatinReverse.bind(null,"@Bonjour")).to.throw("Please enter a valid Pig Latin word");
      expect(newPiggy.pigLatinReverse.bind(null,"island-aay")).to.throw("Please enter a valid Pig Latin word");
      expect(newPiggy.pigLatinReverse.bind(null,"island--ay")).to.throw("Please enter a valid Pig Latin word");
    });
  });

});

