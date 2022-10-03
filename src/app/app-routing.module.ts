import { BibliotecacodiComponent } from './pages/bibliotecacodi/bibliotecacodi.component';
import { VideotutoComponent } from './pages/videotuto/videotuto.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ModuloalgoComponent } from './pages/moduloalgo/moduloalgo.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'videotuto', component: VideotutoComponent},
  {path: 'bibliotecacodi', component: BibliotecacodiComponent},
  {path: 'moduloalgo', component: ModuloalgoComponent},
  {path: 'recucontra', loadChildren: () => import('./pages/login/recucontra/recucontra.module')
  .then( m => m.RecucontraPageModule)},
  {path: 'moduloapren', loadChildren: () => import('./pages/moduloapren/moduloapren.module')
  .then( m => m.ModuloaprenPageModule)},
  {path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

