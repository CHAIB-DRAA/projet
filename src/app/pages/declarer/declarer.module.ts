import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeclarerPageRoutingModule } from './declarer-routing.module';

import { DeclarerPage } from './declarer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeclarerPageRoutingModule
  ],
  declarations: [DeclarerPage]
})
export class DeclarerPageModule {}
