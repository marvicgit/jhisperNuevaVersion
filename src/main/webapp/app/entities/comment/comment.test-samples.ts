import dayjs from 'dayjs/esm';

import { IComment, NewComment } from './comment.model';

export const sampleWithRequiredData: IComment = {
  id: 17526,
};

export const sampleWithPartialData: IComment = {
  id: 12327,
  date: dayjs('2023-08-10T04:56'),
};

export const sampleWithFullData: IComment = {
  id: 4140,
  date: dayjs('2023-08-09T23:47'),
  text: 'Producto instalación',
};

export const sampleWithNewData: NewComment = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
