import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hhtp: HttpClient) { }

  //Obtiene una lista de usuarios fijos
  getUsuarios() {
    return this.hhtp.get('https://jsonplaceholder.typicode.com/users');
  }

  //Obtiene un usuario aleatorio
  getUsuario() {
    return this.hhtp.get('https://randomuser.me/api/');
  }

  //Obtiene las opciones del menú
  getOpcionesMenu() {
    return this.hhtp.get<Componente[]>('/assets/data/menu-opciones.json');
  }

}
