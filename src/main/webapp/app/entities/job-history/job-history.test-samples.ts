import dayjs from 'dayjs/esm';

import { Language } from 'app/entities/enumerations/language.model';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 455,
};

export const sampleWithPartialData: IJobHistory = {
  id: 19968,
};

export const sampleWithFullData: IJobHistory = {
  id: 21282,
  startDate: dayjs('2023-08-10T01:14'),
  endDate: dayjs('2023-08-10T11:19'),
  language: 'ENGLISH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
