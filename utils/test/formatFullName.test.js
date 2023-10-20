const expect = require('chai').expect;
const formatFullName = require('../formatFullname');

describe('formatFullName', () => {
  it('should return an Error if argument is not a string', () => {
    expect(formatFullName()).to.equal('Error');
    expect(formatFullName(undefined)).to.equal('Error')
    expect(formatFullName([])).to.equal('Error')
    expect(formatFullName({})).to.equal('Error')
    expect(formatFullName(45)).to.equal('Error')
  })
  it('should return an Error if argument is longer than 2 words', () => {
    expect(formatFullName('John Doe Junior')).to.equal('Error');
  })
  it('should return an Error if argument is shorter than 2 words', () => {
    expect(formatFullName('John')).to.equal('Error');
  })
  it('should properly format the full name if the arguments are 2 strings', () => {
    expect(formatFullName('John Doe')).to.equal('John Doe');
    expect(formatFullName('joHN dOe')).to.equal('John Doe');
  })
})