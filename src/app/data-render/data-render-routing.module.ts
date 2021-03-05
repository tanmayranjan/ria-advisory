import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowDataComponent } from './components/show-data/show-data.component';

const routes : Routes = [
  
  {
      path: '',
      component : ShowDataComponent
  } 
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRenderRoutingModule { }
