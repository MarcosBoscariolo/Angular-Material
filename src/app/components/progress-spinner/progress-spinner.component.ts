import { Component, OnInit } from '@angular/core';
import { interval, map, Observable, takeWhile } from 'rxjs';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {

  loadingPercent: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.loadingProgress(400).subscribe(i => this.loadingPercent = i);
  }

  loadingProgress(speed: number): Observable<number> {
    return interval(speed)
      .pipe(
        map(i => i * 4),
        takeWhile(i => i <= 100)
      );
  }

}
