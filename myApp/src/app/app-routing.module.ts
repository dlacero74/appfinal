import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
  { path: 'id-facial', loadChildren: './id-facial/id-facial.module#IdFacialPageModule' },
  { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'usuario', loadChildren: './usuario/usuario.module#UsuarioPageModule' },
  { path: 'camara', loadChildren: './camara/camara.module#CamaraPageModule' },
  { path: 'guardar-foto', loadChildren: './guardar-foto/guardar-foto.module#GuardarFotoPageModule' },
  { path: 'id-cedula', loadChildren: './id-cedula/id-cedula.module#IdCedulaPageModule' },
  { path: 'seguro-guardar-foto', loadChildren: './seguro-guardar-foto/seguro-guardar-foto.module#SeguroGuardarFotoPageModule' },
  { path: 'registro-cedula', loadChildren: './registro-cedula/registro-cedula.module#RegistroCedulaPageModule' },
  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
  { path: 'administrador', loadChildren: './administrador/administrador.module#AdministradorPageModule' },
  { path: 'camara2', loadChildren: './camara2/camara2.module#Camara2PageModule' },
  { path: 'registro-exitoso', loadChildren: './registro-exitoso/registro-exitoso.module#RegistroExitosoPageModule' },
  { path: 'camara-inicio', loadChildren: './camara-inicio/camara-inicio.module#CamaraInicioPageModule' },
  { path: 'mapa', loadChildren: './mapa/mapa.module#MapaPageModule' },
  { path: 'menu-ini', loadChildren: './menu-ini/menu-ini.module#MenuIniPageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
