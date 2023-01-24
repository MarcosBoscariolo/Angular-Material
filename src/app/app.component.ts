import { Component, AfterContentInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit{

  title = 'Angular-Material';
  openSidenav: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngAfterContentInit() {
    this.breakpointObserver
      .observe(["(max-width: 800px"])
      .subscribe((res) => this.openSidenav = res.matches);
  }

  get sidenavMode() {
    return this.openSidenav ? "over" : "side";
  }

}
