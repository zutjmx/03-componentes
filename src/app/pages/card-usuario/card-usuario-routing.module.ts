import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardUsuarioPage } from './card-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: CardUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardUsuarioPageRoutingModule {}
