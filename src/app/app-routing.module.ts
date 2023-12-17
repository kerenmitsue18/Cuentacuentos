import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { formulary } from './formulary/formulary.component';
import { Stories } from './stories/stories.component';

const routes: Routes = [
  { path: 'home', component: formulary, pathMatch: 'full' }, 
  { path: 'storie', component: Stories }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Ruta por defecto redirigida a '/home'
  { path: '**', redirectTo: '/home' },  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
