import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDataComponent } from './components/main-data/main-data.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'not-found', component: PageNotFoundComponent },
  { path: ':id', component: MainDataComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
