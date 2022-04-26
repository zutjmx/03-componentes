import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hhtp: HttpClient) { }

  getUsuarios() {
    return this.hhtp.get('https://jsonplaceholder.typicode.com/users');
  }
}
