import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.page.html',
  styleUrls: ['./card-usuario.page.scss'],
})
export class CardUsuarioPage implements OnInit {

  usuario: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.cargaUsuario();
  }

  cargaUsuario() {
    this.dataService.getUsuario().subscribe();
    this.usuario = this.dataService.getUsuario();
    console.log('Usuario: ',this.usuario);
  }

}
