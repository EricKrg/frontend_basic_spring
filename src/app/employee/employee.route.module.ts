import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';

const appRoutes = [
  {path:'api/employees',component: ListComponent}
]

@NgModule({
  imports: [
      RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})

export class EmployeeRoute{
}
