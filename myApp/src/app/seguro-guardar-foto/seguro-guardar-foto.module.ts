import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SeguroGuardarFotoPage } from './seguro-guardar-foto.page';

const routes: Routes = [
  {
    path: '',
    component: SeguroGuardarFotoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SeguroGuardarFotoPage]
})
export class SeguroGuardarFotoPageModule {}
