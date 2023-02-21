import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SnackbarMsnComponent } from './snackbar-msn/snackbar-msn.component';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  horizontaValues: string[] = ["start", "center", "end", "left", "right"];
  verticalValues: string[] = ["top", "bottom"];

  constructor(private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.openSnackbar();
  }

  openSnackbar() {
    const snackbar = this.snackbar.open("Essa página está em desenvolvimento...", "Fechar", { duration: 5000 });

    snackbar.afterDismissed().subscribe(afterClose => {
      console.log("DISMISSED");
    })

    snackbar.onAction().subscribe(afterCloseOnAction => {
      console.log("After Action");
    })
  }

  openSnackbarFromComponent() {
    this.snackbar.openFromComponent(SnackbarMsnComponent, {
      data: "Enviado com sucesso!"
    })
  }

  openSnackBar() {
    console.log("Horizontal", this.horizontalPosition);
    console.log("Vertical", this.verticalPosition);
    this.snackbar.open("Message Snackbar", "Close", {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }

}
