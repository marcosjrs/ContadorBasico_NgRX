import { Action } from '@ngrx/store';

export const INCREMENTAR = '[Contador] INCREMENTAR';
export const DECREMENTAR = '[Contador] DECREMENTAR';

//son clases, no funciones. La forma de dispararlas será creandoles un new.
export class IncrementarAction implements Action{
  readonly type = INCREMENTAR;
}

export class DecrementarAction implements Action{
  readonly type = DECREMENTAR;
}

