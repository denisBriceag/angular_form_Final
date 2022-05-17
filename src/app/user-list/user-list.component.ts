import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Data } from '../data.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  destroy$: Subject<void> = new Subject();
  dataArray: Data[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.dataTransfer
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => this.dataArray.push(data));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
