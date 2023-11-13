import dayjs from 'dayjs/esm';

import { Status } from 'app/entities/enumerations/status.model';
import { Type } from 'app/entities/enumerations/type.model';
import { Priority } from 'app/entities/enumerations/priority.model';

import { ITicket, NewTicket } from './ticket.model';

export const sampleWithRequiredData: ITicket = {
  id: 13073,
  title: 'Configuración Datos',
};

export const sampleWithPartialData: ITicket = {
  id: 14786,
  title: 'Blanco Programable',
  description: 'Diseñador Rojo caja',
  status: 'IN_PROGRESS',
};

export const sampleWithFullData: ITicket = {
  id: 1624,
  title: 'Marketing Baleares Organizado',
  description: 'Verde Violeta innovadora',
  dueDate: dayjs('2023-08-09'),
  date: dayjs('2023-08-10T01:31'),
  status: 'WAITING_FOR_RESPONSE',
  type: 'FEATURE',
  priority: 'HIGHER',
};

export const sampleWithNewData: NewTicket = {
  title: 'Marca',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
