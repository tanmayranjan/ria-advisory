import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewTableCompDataService {
  public tableHierarchy = new BehaviorSubject<any>({});
  constructor() { }
}
