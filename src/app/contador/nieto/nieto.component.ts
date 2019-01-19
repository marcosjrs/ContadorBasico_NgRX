import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { ResetearAction } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {
  contador:number;

  constructor(private store:Store<AppState>) {
    this.store.select('contador').subscribe( contador => this.contador = contador );
  }

  ngOnInit() {
  }

  reset(){
    const accion = new ResetearAction();
    this.store.dispatch(accion);
  }

}
