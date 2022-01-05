import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    console.log(event);
    setTimeout(() => {
      if(this.data.length>100) {
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled=true;
        return;
      }
      const nuevoArreglo = Array(20);
      this.data.push(...nuevoArreglo);
      //event.target.complete();
      this.infiniteScroll.complete();
    }, 1500);
  }

}
