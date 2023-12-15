import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMyPlantsComponent } from './pages/page-my-plants/page-my-plants.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  //  quand il est sur ce 'http://localhost 4200' alors il affiche ce component
  { path: '', component: PageHomeComponent },
  // et là pour l'url http://localhost:4200/myPlants
  { path: 'my-plants', component: PageMyPlantsComponent },
  // ci dessous, le path pour aller à la page admin
  { path: 'admin', component: PageAdminComponent },
  //les etoiles font reference à 'tout' sauf ce qui doit être mentionné comme bonne url
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
