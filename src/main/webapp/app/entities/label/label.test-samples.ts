import { ILabel, NewLabel } from './label.model';

export const sampleWithRequiredData: ILabel = {
  id: 31091,
  label: 'Hormigon Jefe',
};

export const sampleWithPartialData: ILabel = {
  id: 2481,
  label: 'Música',
};

export const sampleWithFullData: ILabel = {
  id: 13033,
  label: 'Cantabria',
};

export const sampleWithNewData: NewLabel = {
  label: 'Perseverando Extremadura',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
