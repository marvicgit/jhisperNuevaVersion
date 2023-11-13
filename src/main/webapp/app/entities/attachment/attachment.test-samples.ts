import { IAttachment, NewAttachment } from './attachment.model';

export const sampleWithRequiredData: IAttachment = {
  id: 3285,
  name: 'Pequeño producto Hogar',
};

export const sampleWithPartialData: IAttachment = {
  id: 2839,
  name: 'Cliente Violeta Rústico',
  file: '../fake-data/blob/hipster.png',
  fileContentType: 'unknown',
};

export const sampleWithFullData: IAttachment = {
  id: 4558,
  name: 'Diseñador real',
  file: '../fake-data/blob/hipster.png',
  fileContentType: 'unknown',
};

export const sampleWithNewData: NewAttachment = {
  name: 'Granito Metal',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
