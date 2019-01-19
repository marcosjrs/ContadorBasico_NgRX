import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {
  @Input() contador:number;
  @Output() resetContador:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  reset(){
    this.resetContador.emit();
  }

}
