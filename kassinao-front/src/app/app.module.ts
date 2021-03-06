import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaralhoComponent } from './baralho/baralho.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MesaComponent } from './mesa/mesa.component';

@NgModule({
  declarations: [
    AppComponent,
    BaralhoComponent,
    MesaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
