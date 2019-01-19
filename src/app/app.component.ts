import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import {
  IncrementarAction,
  DecrementarAction
} from "./contador/contador.actions";

//El esquema del estado de toda la aplicación. (Se podría haber utilizado en app.module cuando se añadía..)
export interface AppState {
  contador: number;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  contador: number;

  constructor(private store: Store<AppState>) {
    //Indicamos que el store principal tiene la estructura de la interface AppState
    this.store.subscribe(state => (this.contador = state.contador));
  }

  incrementar() {
    const action = new IncrementarAction();
    this.store.dispatch(action);
  }

  decrementar() {
    const action = new DecrementarAction();
    this.store.dispatch(action);
  }

  cambioContador(evt) {}

  resetContador() {}
}
