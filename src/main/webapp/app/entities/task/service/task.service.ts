import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, asapScheduler, scheduled } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { isPresent } from 'app/core/util/operators';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { Search } from 'app/core/request/request.model';
import { ITask, NewTask } from '../task.model';

export type PartialUpdateTask = Partial<ITask> & Pick<ITask, 'id'>;

export type EntityResponseType = HttpResponse<ITask>;
export type EntityArrayResponseType = HttpResponse<ITask[]>;

@Injectable({ providedIn: 'root' })
export class TaskService {
  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/tasks');
  protected resourceSearchUrl = this.applicationConfigService.getEndpointFor('api/_search/tasks');

  constructor(protected http: HttpClient, protected applicationConfigService: ApplicationConfigService) {}

  create(task: NewTask): Observable<EntityResponseType> {
    return this.http.post<ITask>(this.resourceUrl, task, { observe: 'response' });
  }

  update(task: ITask): Observable<EntityResponseType> {
    return this.http.put<ITask>(`${this.resourceUrl}/${this.getTaskIdentifier(task)}`, task, { observe: 'response' });
  }

  partialUpdate(task: PartialUpdateTask): Observable<EntityResponseType> {
    return this.http.patch<ITask>(`${this.resourceUrl}/${this.getTaskIdentifier(task)}`, task, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ITask>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ITask[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  search(req: Search): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ITask[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
      .pipe(catchError(() => scheduled([new HttpResponse<ITask[]>()], asapScheduler)));
  }

  getTaskIdentifier(task: Pick<ITask, 'id'>): number {
    return task.id;
  }

  compareTask(o1: Pick<ITask, 'id'> | null, o2: Pick<ITask, 'id'> | null): boolean {
    return o1 && o2 ? this.getTaskIdentifier(o1) === this.getTaskIdentifier(o2) : o1 === o2;
  }

  addTaskToCollectionIfMissing<Type extends Pick<ITask, 'id'>>(
    taskCollection: Type[],
    ...tasksToCheck: (Type | null | undefined)[]
  ): Type[] {
    const tasks: Type[] = tasksToCheck.filter(isPresent);
    if (tasks.length > 0) {
      const taskCollectionIdentifiers = taskCollection.map(taskItem => this.getTaskIdentifier(taskItem)!);
      const tasksToAdd = tasks.filter(taskItem => {
        const taskIdentifier = this.getTaskIdentifier(taskItem);
        if (taskCollectionIdentifiers.includes(taskIdentifier)) {
          return false;
        }
        taskCollectionIdentifiers.push(taskIdentifier);
        return true;
      });
      return [...tasksToAdd, ...taskCollection];
    }
    return taskCollection;
  }
}
