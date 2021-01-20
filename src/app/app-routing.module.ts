import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForsideComponent } from './forside/forside.component';


const routes: Routes = [
  { path: '', redirectTo: 'Welcome', pathMatch: 'full' },
{ path: 'Welcome', component: ForsideComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
