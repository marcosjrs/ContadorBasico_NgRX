import { Action } from '@ngrx/store';

export const INCREMENTAR = '[Contador] INCREMENTAR';
export const DECREMENTAR = '[Contador] DECREMENTAR';
export const MULTIPLICAR = '[Contador] MULTIPLICAR';
export const DIVIDIR = '[Contador] DIVIDIR';
export const RESETEAR = '[Contador] RESET';

//son clases, no funciones. La forma de dispararlas será creandoles un new.
export class IncrementarAction implements Action{
  readonly type = INCREMENTAR;
}

export class DecrementarAction implements Action{
  readonly type = DECREMENTAR;
}

export class MultiplicarAction implements Action{
  readonly type = MULTIPLICAR;
  constructor(public payload:number){ }
}

export class DividirAction implements Action{
  readonly type = DIVIDIR;
  constructor(public payload:number){}
}

export class ResetearAction implements Action{
  readonly type = RESETEAR;
}


export type Actions = IncrementarAction | DecrementarAction |MultiplicarAction | DividirAction | ResetearAction;
