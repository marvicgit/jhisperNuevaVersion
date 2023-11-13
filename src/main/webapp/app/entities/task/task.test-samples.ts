import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 11767,
};

export const sampleWithPartialData: ITask = {
  id: 30317,
  title: 'maximizada',
  description: 'Amarillo Marroquinería',
};

export const sampleWithFullData: ITask = {
  id: 10011,
  title: 'Natalia Videojuegos Bicicleta',
  description: 'Cataluña Extremadura',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
