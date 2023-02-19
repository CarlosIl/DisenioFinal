import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(private dialogRef: MatDialogRef<ModalComponent>) {}

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}
