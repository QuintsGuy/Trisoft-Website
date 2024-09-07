import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HeaderDialogComponent } from '../header-dialog/header-dialog.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatDialogModule, HeaderDialogComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(HeaderDialogComponent, {
      width: '500px',
      height: '659px',
      disableClose: false,
      hasBackdrop: true,
      backdropClass: 'custom-backdrop-class',
      panelClass: 'custom-dialog-container'
    });

    dialogRef.backdropClick().subscribe(() => {
      dialogRef.close();
    })
  }
}
