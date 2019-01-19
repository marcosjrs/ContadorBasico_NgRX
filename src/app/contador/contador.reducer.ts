import { Action } from "@ngrx/store";
import { INCREMENTAR, DECREMENTAR, MULTIPLICAR, DIVIDIR, Actions, RESETEAR } from './contador.actions';

export function contadorReducer(state: number = 10, action: Actions) {
  switch (action.type) {
    case INCREMENTAR:
      return state + 1;
    case DECREMENTAR:
      return state - 1;
    case MULTIPLICAR:
      return state * action.payload;
    case DIVIDIR:
      return state / action.payload;
    case RESETEAR:
        return 0;
    default:
      return state;
  }
}
