import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from './contador/app.reducers';
import {
  IncrementarAction,
  DecrementarAction
} from "./contador/contador.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  contador: number;

  constructor(private store: Store<AppState>) {
    //Indicamos que el store principal tiene la estructura de la interface AppState
    this.store
    .select('contador') // seleccionamos solo el valor de contador
    .subscribe(state => (this.contador = state));
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
