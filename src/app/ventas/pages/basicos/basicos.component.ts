import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'FRANCO';
  nombreUpper: string = 'franco';
  nombreComplete: string = 'FrAncO jOnAtHaN';

  fecha: Date = new Date();
}
