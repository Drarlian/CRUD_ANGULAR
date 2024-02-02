import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudContentComponent } from './components/crud-content/crud-content.component';
import { ViewContentComponent } from './components/view-content/view-content.component';

const routes: Routes = [
  {path: '', component: CrudContentComponent},
  {path: 'users', component: ViewContentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
