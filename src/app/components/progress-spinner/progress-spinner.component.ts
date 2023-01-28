import { Component, OnInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { concat, interval, map, Observable, take, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {

  loadingPercent: number = 0;
  loadingWaitPercent: number = 0;
  mode: ProgressBarMode = "query"

  constructor() { }

  ngOnInit(): void {
    this.loadingProgress(400).subscribe(i => this.loadingPercent = i);
    concat(
      interval(2000)
      .pipe(
        take(1),
        tap(_ => this.mode = "determinate")
      ),
      this.loadingProgress(500)
    ).subscribe(i => this.loadingWaitPercent = i);
  }

  loadingProgress(speed: number): Observable<number> {
    return interval(speed)
      .pipe(
        map(i => i * 4),
        takeWhile(i => i <= 100)
      );
  }

}
