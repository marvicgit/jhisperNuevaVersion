import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 19524,
};

export const sampleWithPartialData: IRegion = {
  id: 4842,
  regionName: 'Región Asistente',
};

export const sampleWithFullData: IRegion = {
  id: 18870,
  regionName: 'Guapo recíproca',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
