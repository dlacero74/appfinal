import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DescripcionDenunciaPage } from './descripcion-denuncia.page';

const routes: Routes = [
  {
    path: '',
    component: DescripcionDenunciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DescripcionDenunciaPage]
})
export class DescripcionDenunciaPageModule {}
