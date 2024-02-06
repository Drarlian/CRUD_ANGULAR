import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CrudContentComponent } from './components/crud-content/crud-content.component';
import { UserService } from './services/user.service';
import { TableViewerComponent } from './components/table-viewer/table-viewer.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    CrudContentComponent,
    TableViewerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [UserService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
