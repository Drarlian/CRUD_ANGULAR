import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CrudContentComponent } from './components/crud-content/crud-content.component';
import { ViewContentComponent } from './components/view-content/view-content.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    CrudContentComponent,
    ViewContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
