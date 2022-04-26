import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: string[] = ['Arya Stark',
                          'Sansa Stark',
                          'Melisandre',
                          'Margaery Tyrell',
                          'Talisa Maegyr',
                          'Gilly',
                          'Missandei',
                          'Danaerys Targayrean',
                          'Shae',
                          'Osha',
                          'Ygritte',
                          'Yara Greyjoy',
                          'IRRI',
                          'ROS'];
  reorderDisabled = true;

  constructor() { }

  ngOnInit() {
  }

  doReOrder(event: any) {
    console.log(event);
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to,0,itemMover);
    event.detail.complete();
    console.log(this.personajes);
  }

  toggleReorder() {
    this.reorderDisabled = !this.reorderDisabled;
  }

}
