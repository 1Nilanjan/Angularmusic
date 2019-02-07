import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayListComponent } from './modules/track/components/play-list/play-list.component';
import { HomeComponent } from './modules/track/components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'play-list', component: PlayListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
