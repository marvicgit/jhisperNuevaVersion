import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 2557,
};

export const sampleWithPartialData: ILocation = {
  id: 25580,
  postalCode: 'Música Amarillo',
  stateProvince: 'Camino Haiti Teclado',
};

export const sampleWithFullData: ILocation = {
  id: 24488,
  streetAddress: 'Hormigon Relacciones Decoración',
  postalCode: 'Agente Rojo Agustín',
  city: 'San Sebastían de los Reyes',
  stateProvince: 'Kazajistan',
};

export const sampleWithNewData: NewLocation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
