import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDataComponent } from './components/show-data/show-data.component';
import { DataRenderRoutingModule } from './data-render-routing.module';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [ShowDataComponent, TableComponent],
  imports: [
    CommonModule,
    DataRenderRoutingModule
  ]
})
export class DataRenderModule { }
