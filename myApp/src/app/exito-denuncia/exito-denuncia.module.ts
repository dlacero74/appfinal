import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExitoDenunciaPage } from './exito-denuncia.page';

const routes: Routes = [
  {
    path: '',
    component: ExitoDenunciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExitoDenunciaPage]
})
export class ExitoDenunciaPageModule {}
