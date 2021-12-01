const { queryString } = require("./queryString")

describe('Object to query string', () => {
  it('should create a valid query string when an object', () => {
    const obj = {
      name: 'Paulo',
      profession: 'developer'
    }

    expect(queryString(obj)).toBe('name=Paulo&profession=developer')
  })

  it('should create a valid query string even when a array is passed as a value', () => {
    const obj = {
      name: 'Paulo',
      abilities: ['JS', 'TDD']
    }

    expect(queryString(obj)).toBe('name=Paulo&abilities=JS,TDD')
  })

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Paulo',
      abilities: {
        first: 'JS',
        second: 'TDD'
      }
    }

    expect(() => {
      queryString(obj)
    }).toThrowError()
  })
})