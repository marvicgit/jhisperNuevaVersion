import { IProject, NewProject } from './project.model';

export const sampleWithRequiredData: IProject = {
  id: 29888,
};

export const sampleWithPartialData: IProject = {
  id: 4005,
};

export const sampleWithFullData: IProject = {
  id: 3694,
  name: 'Orientado Operaciones',
};

export const sampleWithNewData: NewProject = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
