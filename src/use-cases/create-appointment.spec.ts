import { describe, expect, it } from 'vitest'
import { Appointment } from '../entities/appointment'
import { getValidDate } from '../tests/utils/get-valid-date'
import { CreateAppointment } from './create-appointment'

describe('Create Appointment', () => {
  it('should be able to create an appointment', () => {
    const startsAt = getValidDate('2022-08-10')
    const endsAt = getValidDate('2022-08-11')

    const createAppointment = new CreateAppointment()

    expect(createAppointment.execute({
      customer: 'John Doe',
      startsAt,
      endsAt
    })).resolves.toBeInstanceOf(Appointment)
  })
})
