import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'empty',
    loadChildren: () =>
      import('./modules/empty/empty.module')
        .then(m => m.CalendarModule)
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./modules/list/list.module')
        .then(m => m.ListModule)
  },
  {
    path: '',
    redirectTo: 'empty',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
