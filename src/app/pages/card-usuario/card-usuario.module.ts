import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardUsuarioPageRoutingModule } from './card-usuario-routing.module';

import { CardUsuarioPage } from './card-usuario.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardUsuarioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CardUsuarioPage]
})
export class CardUsuarioPageModule {}
