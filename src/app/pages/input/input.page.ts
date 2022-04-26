import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre = 'Jesús Zúñiga';
  usuario = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formulario: NgForm) {
    console.log('Formulario: ', formulario);
    console.log('Usuario: ',this.usuario);
    console.log('correo: ', this.usuario.email);
    console.log('contraseña: ', this.usuario.password);
  }

}
