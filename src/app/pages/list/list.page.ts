import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild(IonList) ionList: IonList;
  usuarios: Observable<any>;
  cargando: boolean;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.cargando = true;
    this.usuarios = this.dataService.getUsuarios();
    this.cargando = false;
  }

  favorite(usuario: any) {
    console.log('favorite: ',usuario);
    this.ionList.closeSlidingItems();
  }

  share(usuario: any) {
    console.log('share: ',usuario);
    this.ionList.closeSlidingItems();
  }

  borrar(usuario: any) {
    console.log('borrar: ',usuario.name);
    this.ionList.closeSlidingItems();
  }

}
