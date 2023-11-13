import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'project',
        data: { pageTitle: 'jhipsterApp.project.home.title' },
        loadChildren: () => import('./project/project.routes'),
      },
      {
        path: 'label',
        data: { pageTitle: 'jhipsterApp.label.home.title' },
        loadChildren: () => import('./label/label.routes'),
      },
      {
        path: 'ticket',
        data: { pageTitle: 'jhipsterApp.ticket.home.title' },
        loadChildren: () => import('./ticket/ticket.routes'),
      },
      {
        path: 'attachment',
        data: { pageTitle: 'jhipsterApp.attachment.home.title' },
        loadChildren: () => import('./attachment/attachment.routes'),
      },
      {
        path: 'comment',
        data: { pageTitle: 'jhipsterApp.comment.home.title' },
        loadChildren: () => import('./comment/comment.routes'),
      },
      {
        path: 'country',
        data: { pageTitle: 'jhipsterApp.country.home.title' },
        loadChildren: () => import('./country/country.routes'),
      },
      {
        path: 'department',
        data: { pageTitle: 'jhipsterApp.department.home.title' },
        loadChildren: () => import('./department/department.routes'),
      },
      {
        path: 'employee',
        data: { pageTitle: 'jhipsterApp.employee.home.title' },
        loadChildren: () => import('./employee/employee.routes'),
      },
      {
        path: 'job',
        data: { pageTitle: 'jhipsterApp.job.home.title' },
        loadChildren: () => import('./job/job.routes'),
      },
      {
        path: 'job-history',
        data: { pageTitle: 'jhipsterApp.jobHistory.home.title' },
        loadChildren: () => import('./job-history/job-history.routes'),
      },
      {
        path: 'location',
        data: { pageTitle: 'jhipsterApp.location.home.title' },
        loadChildren: () => import('./location/location.routes'),
      },
      {
        path: 'region',
        data: { pageTitle: 'jhipsterApp.region.home.title' },
        loadChildren: () => import('./region/region.routes'),
      },
      {
        path: 'task',
        data: { pageTitle: 'jhipsterApp.task.home.title' },
        loadChildren: () => import('./task/task.routes'),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
