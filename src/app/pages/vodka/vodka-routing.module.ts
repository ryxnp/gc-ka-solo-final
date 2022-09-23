import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VodkaPage } from './vodka.page';

const routes: Routes = [
  {
    path: '',
    component: VodkaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VodkaPageRoutingModule {}
