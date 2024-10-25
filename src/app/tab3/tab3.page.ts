import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  a: number;
  b: number;
  c: number;
  raiz1: number | null;
  raiz2: number | null;

  constructor() {
    this.a = 0;
    this.b = 0;
    this.c = 0;
    this.raiz1=NaN;
    this.raiz2=NaN;
  }

  calcularRaices() {
    const discriminante = this.b ** 2 - 4 * this.a * this.c;

    if (discriminante > 0) {
      this.raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
      this.raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
    } else if (discriminante === 0) {
      this.raiz1 = this.raiz2 = -this.b / (2 * this.a);
    } else {
      this.raiz1 = this.raiz2 = null ; 
    }
  }

}
