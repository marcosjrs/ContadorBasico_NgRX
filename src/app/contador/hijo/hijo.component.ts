import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { MultiplicarAction, DividirAction } from '../contador.actions';
import { AppState } from '../app.reducers';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {
  contador:number;

  constructor(private store:Store<AppState>) {
    this.store.select("contador").subscribe(contador => this.contador = contador);
   }

  ngOnInit() {
  }

  multiplicar(){
    const accion = new MultiplicarAction(2);
    this.store.dispatch(accion);
  }

  dividir(){
    const accion = new DividirAction(2);
    this.store.dispatch(accion);
  }

  resetContador(){
    //this.cambioContador.emit(0);
  }

}
