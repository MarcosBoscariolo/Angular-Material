import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { fromEvent, map } from 'rxjs';

export const SCROLL_CONTAINER = "mat-sidenav-content";
export const TEXT_LIMIT = 50;
export const SHADOW_LIMIT = 100;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular-Material';
  openSidenav: boolean = false;
  popText: boolean = false;
  applyShadow: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    const content = document.getElementsByClassName(SCROLL_CONTAINER)[0];
    fromEvent(content, "scroll")
      .pipe(
        map(() => content.scrollTop)
      )
      .subscribe({
        next: (value: number) => {
          this.determineHeader(value);
        }
      });
  }

  determineHeader(scrollTop: number): void {
    this.popText = scrollTop >= TEXT_LIMIT;
    this.applyShadow = scrollTop >= SHADOW_LIMIT;
  }

  ngAfterContentInit() {
    this.breakpointObserver
      .observe(["(max-width: 800px"])
      .subscribe((res) => this.openSidenav = res.matches);
  }

  get sidenavMode() {
    return this.openSidenav ? "over" : "side";
  }

}
