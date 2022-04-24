import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /*   title = 'pipesApp';
    nombre: string = 'joNatHan Franco';
    valor: number = 1000;
  
    obj={
      nombre:'franco'
    }
  
  
    mostrarNombre() {
      console.log(this.nombre);
      console.log(this.valor);
    } */

  constructor(private primeNGConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primeNGConfig.ripple = true;
  }
}
