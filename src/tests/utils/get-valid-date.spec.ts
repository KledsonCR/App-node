import { expect, test } from 'vitest'
import { getValidDate } from './get-valid-date'

test('increases date with one year', () => {
  const year = new Date().getFullYear()

  expect(getValidDate(`${year}-08-11`).getFullYear()).toEqual(2023)
})
