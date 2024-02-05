import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudContentComponent } from './components/crud-content/crud-content.component';
import { TableViewerComponent } from './components/table-viewer/table-viewer.component';

const routes: Routes = [
  {path: '', component: CrudContentComponent},
  {path: 'users', component: TableViewerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
