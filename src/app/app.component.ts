import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Data } from './data.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
