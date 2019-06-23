import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CamaraInicioPage } from './camara-inicio.page';

const routes: Routes = [
  {
    path: '',
    component: CamaraInicioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CamaraInicioPage]
})
export class CamaraInicioPageModule {}
