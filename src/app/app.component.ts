import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input() valorFinal = false;
  @Input() Login = false;

  title = 'DisenioFinal';

  actualizar(valor: boolean){
    this.valorFinal=valor;
  }

  cambiar(valor: boolean){
    this.Login=valor;
  }
}
