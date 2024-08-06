import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-header-dialog',
  standalone: true,
  imports: [],
  templateUrl: './header-dialog.component.html',
  styleUrl: './header-dialog.component.css',
  styles: `mat-dialog-container.mat-dialog-container {
    padding: 0;
  }`,
  encapsulation:ViewEncapsulation.None,
})
export class HeaderDialogComponent {
  constructor(public dialogRef: MatDialogRef<HeaderDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
