import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RumPage } from './rum.page';

const routes: Routes = [
  {
    path: '',
    component: RumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RumPageRoutingModule {}
