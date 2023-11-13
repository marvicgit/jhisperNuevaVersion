import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 21124,
  departmentName: 'Ordenador',
};

export const sampleWithPartialData: IDepartment = {
  id: 1453,
  departmentName: 'Joyería',
};

export const sampleWithFullData: IDepartment = {
  id: 8036,
  departmentName: 'Algodón Agente',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'Madera Gorro Creativo',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
