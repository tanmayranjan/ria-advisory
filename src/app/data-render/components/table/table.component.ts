import { Component, Input, OnInit } from '@angular/core';
import { ArraystructureService } from '../../services/arraystructure.service';
import { NewTableCompDataService } from '../../services/new-table-comp-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
@Input() data : Array<any> = [];
@Input() title : string = '';
keys: string[] = [];
newJsonData: any = [];
currentIndex = 0
  constructor(private getStructure : ArraystructureService,private newComp : NewTableCompDataService) { }

  ngOnInit(): void {
    let obj  = this.getStructure.getArrayStructure(this.data);
    this.keys = obj['keys'];
    this.newJsonData = obj['arr'];
    console.log(this.newJsonData);
  }
  checkArray(arr : any){
    if (arr instanceof Array){
      return true;
    }
    return false;
  }
  createComp(arr : Array<any>,item : any){
    this.currentIndex++;
     this.newComp.tableHierarchy.next({comp : TableComponent , data : arr , title : item });
  }
}
