import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IdCedulaPage } from './id-cedula.page';

const routes: Routes = [
  {
    path: '',
    component: IdCedulaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IdCedulaPage]
})
export class IdCedulaPageModule {}
