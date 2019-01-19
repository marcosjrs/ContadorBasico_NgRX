import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {
  @Input() contador:number;
  @Output() cambioContador:EventEmitter<number> = new EventEmitter();

  constructor() {
   }

  ngOnInit() {
  }

  multiplicar(){
    this.contador *= 2;
    this.cambioContador.emit(this.contador);
  }

  dividir(){
    this.contador /= 2;
    this.cambioContador.emit(this.contador);
  }

  resetContador(){
    this.cambioContador.emit(0);
  }

}
