import { describe, expect, it } from 'vitest'
import { Appointment } from '../entities/appointment'
import { InMemoryAppointmentsRepository } from '../repositories/in-memory/in-memory-appointments-repository'
import { getValidDate } from '../tests/utils/get-valid-date'
import { CreateAppointment } from './create-appointment'

describe('Create Appointment', () => {
  it('should be able to create an appointment', () => {
    const startsAt = getValidDate('2022-08-10')
    const endsAt = getValidDate('2022-08-11')

    const appointmentsRepository = new InMemoryAppointmentsRepository()
    const createAppointment = new CreateAppointment(
      appointmentsRepository
    )

    expect(createAppointment.execute({
      customer: 'John Doe',
      startsAt,
      endsAt
    })).resolves.toBeInstanceOf(Appointment)
  })
})
