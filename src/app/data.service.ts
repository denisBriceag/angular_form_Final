import { Injectable } from '@angular/core';
import { Data } from './data.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  dataTransfer = new Subject<Data>();
}
