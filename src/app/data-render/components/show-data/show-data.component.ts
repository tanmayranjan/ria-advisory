import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import jsonData from '../../data.json';
import { ArraystructureService } from '../../services/arraystructure.service';
import { NewTableCompDataService } from '../../services/new-table-comp-data.service';
@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.scss']
})
export class ShowDataComponent implements OnInit {

  data: any = jsonData;
  keys: string[] = [];
  newJsonData: any = [];
  @ViewChild('container', { read: ViewContainerRef }) container: any;
  constructor(private getStructure : ArraystructureService,private componentFactoryResolver: ComponentFactoryResolver,private newComp : NewTableCompDataService) { }

  ngOnInit(): void {
  let obj  = this.getStructure.getArrayStructure(this.data);
  console.log(obj);
  this.keys = obj['keys'];
  this.newJsonData = obj['arr'];
  this.newComp.tableHierarchy.subscribe((item) => {
    if (item['comp']) {
    
       const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item['comp']);
      let component = this.container.createComponent(componentFactory);
      component.instance['reference'] = component;
      component.instance['data'] = item['data'];
       component.instance['title'] = item['title'];
   
    }
  
  });
  }
  
  checkArray(arr : any){
    if (arr instanceof Array){
      return true;
    }
    return false;
  } 
}


