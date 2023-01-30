import { Component, OnInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { combineLatest, concat, interval, map, Observable, take, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {

  loadingPercent: number = 0;
  loadingWaitPercent: number = 0;
  mode: ProgressBarMode = "query"
  loadingValueBuffer: number = 0;
  bufferValue: number = 0;

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

    combineLatest(this.loadingProgress(400), this.loadingProgress(300)).subscribe(i => {
      this.loadingValueBuffer = i[0];
      this.bufferValue = i[1]
    });
  }

  loadingProgress(speed: number): Observable<number> {
    return interval(speed)
      .pipe(
        map(i => i * 4),
        takeWhile(i => i <= 100)
      );
  }

}
