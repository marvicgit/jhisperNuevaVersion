import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 25578,
};

export const sampleWithPartialData: ICountry = {
  id: 31712,
  countryName: 'División',
};

export const sampleWithFullData: ICountry = {
  id: 25409,
  countryName: 'Granito Metal',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
