import { queryString, parse } from "./queryString"

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

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Paulo&profession=developer'

    expect(parse(qs)).toEqual({
      name: 'Paulo',
      profession: 'developer'
    })
  })

  it('should convert a query string to object with single key-value', () => {
    const qs = 'name=Paulo'

    expect(parse(qs)).toEqual({
      name: 'Paulo',
    })
  })

  it('should convert a query string to an object taking carre with coma separed values', () => {
    const qs = 'name=Paulo&abilities=JS,TDD'
    parse(qs)
    // expect(parse(qs)).toEqual({
    //   name: 'Paulo',
    //   abilities: ['JS', 'TDD']
    // })
  })
})