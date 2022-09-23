import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhiskeyPage } from './whiskey.page';

const routes: Routes = [
  {
    path: '',
    component: WhiskeyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhiskeyPageRoutingModule {}
