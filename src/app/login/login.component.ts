import { Component, Input , Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formularioContacto!: FormGroup;
  @Input() log = false;
  @Output() enviarLog = new EventEmitter();

  constructor(private fb: FormBuilder, public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent);
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.sinSubmit();
      }
    });
  }

  sinSubmit(){
    this.log=true;
    this.enviarLog.emit(this.log);
  }
}
