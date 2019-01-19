import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

//El esquema del estado de toda la aplicación. (Se podría haber utilizado en app.module cuando se añadía..)
export interface AppState{
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contador:number;

  constructor(private store:Store<AppState>){ //Indicamos que el store principal tiene la estructura de la interface AppState
    this.store.subscribe(
      state=> this.contador = state.contador
    )
  }

  incrementar(){
    this.store.dispatch({type:"INCREMENTAR"});
  }

  decrementar(){
    this.store.dispatch({type:"DECREMENTAR"});
  }

  cambioContador(evt){

  }

  resetContador(){

  }
}
