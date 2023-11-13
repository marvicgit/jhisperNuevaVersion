import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 9261,
};

export const sampleWithPartialData: IEmployee = {
  id: 30146,
  email: 'Samuel.MayaCarrillo@gmail.com',
  phoneNumber: 'Jefe Azul Marketing',
  hireDate: dayjs('2023-08-09T22:08'),
};

export const sampleWithFullData: IEmployee = {
  id: 22298,
  firstName: 'María Teresa',
  lastName: 'Serna Mora',
  email: 'JulioCesar.HurtadoVillalpando@hotmail.com',
  phoneNumber: 'Práctico Andalucía Operaciones',
  hireDate: dayjs('2023-08-10T11:34'),
  salary: 26227,
  commissionPct: 31792,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
