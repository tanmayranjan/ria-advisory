import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './components/entry/entry.component';

const routes : Routes = [

  {
      path : 'show',
      loadChildren: () => import('./data-render/data-render.module').then(m => m.DataRenderModule)
  },
  {
      path: '',
      component: EntryComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
