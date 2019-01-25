import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface BookData {
  title: string;
  editorial: string;
  author: string;
  edition: number;
}

@Component({
  selector: 'add-libro',
  templateUrl: 'add-libro.component.html',
  styleUrls: ['./add-libro.component.less']
})
export class AddBookComponent {
  title: string;
  editorial: string;
  author: string;
  edition: number;

  constructor(
    public dialogRef: MatDialogRef<AddBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BookData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
