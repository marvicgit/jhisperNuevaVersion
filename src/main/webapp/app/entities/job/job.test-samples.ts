import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 30849,
};

export const sampleWithPartialData: IJob = {
  id: 14407,
  jobTitle: 'Interno Usabilidad Estratega',
};

export const sampleWithFullData: IJob = {
  id: 79,
  jobTitle: 'Gerente Usabilidad Administrador',
  minSalary: 14938,
  maxSalary: 23754,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
