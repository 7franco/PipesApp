import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Franco';
  genero: string = 'masculino';
  ban: boolean = true;

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Hernando', 'Eduardo', 'Fernando']
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente() {
    this.nombres(this.ban);
  }

  nombres(bandera: Boolean) {
    if (bandera) {
      this.nombre = 'Alicia',
        this.genero = 'femenino'
      this.ban = false;
    } else {
      this.nombre = 'Franco',
        this.genero = 'masculino'
      this.ban = true;
    }
  }

  borrarCliente() {
    this.clientes.splice(-1);
  }

  //KeyValue Pipe

  persona = {
    nombre: 'Franco',
    edad: 29,
    direccion: 'Quito-Ecuador'
  }

  //json pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Acuaman',
      vuela: false
    }
  ]

  //Async Pipe

  miObservable = interval(3500);//0,1,2,3,4,5,6,7,8,.....

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 3500);
  });

}
