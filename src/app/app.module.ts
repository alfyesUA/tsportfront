import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing-module/app-routing.module';
import { DeporteModule } from './deporte/deporte.module';
import { FormsModule } from '@angular/forms';
import { DeportistaModule } from './deportista/deportista.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DeporteModule,
    FormsModule,
    DeportistaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
