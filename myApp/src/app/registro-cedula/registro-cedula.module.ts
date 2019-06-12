import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistroCedulaPage } from './registro-cedula.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroCedulaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistroCedulaPage]
})
export class RegistroCedulaPageModule {}
