import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeclarerPage } from './declarer.page';

const routes: Routes = [
  {
    path: '',
    component: DeclarerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeclarerPageRoutingModule {}
