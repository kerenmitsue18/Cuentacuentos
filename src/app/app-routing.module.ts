import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { formulary } from './formulary/formulary.component';
import { Stories } from './stories/stories.component';
import { HomeComponent } from './home/home.component';
/*
const routes: Routes = [
  {path: 'home', component: HomeComponent, pathMatch: 'full' },
  {path: 'formulary', component: formulary }, 
  { path: 'storie', component: Stories }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Ruta por defecto redirigida a '/home'
  { path: '**', redirectTo: '/home' },  
];
*/

const routes: Routes = [
  {path: 'formulary', component: formulary,  pathMatch: 'full'  }, 
  { path: 'storie', component: Stories }, 
  { path: '', redirectTo: '/formulary', pathMatch: 'full' },  // Ruta por defecto redirigida a '/home'
  { path: '**', redirectTo: '/formulary' },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
