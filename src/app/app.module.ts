import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorredorListComponent } from './corredor-list/corredor-list.component';
import { CorredorAboutComponent } from './corredor-about/corredor-about.component';
import { CorredorElegidoComponent } from './corredor-elegido/corredor-elegido.component';
import { CorredorGeneralComponent } from './corredor-general/corredor-general.component';

@NgModule({
  declarations: [
    AppComponent,
    CorredorListComponent,
    CorredorAboutComponent,
    CorredorElegidoComponent,
    CorredorGeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
