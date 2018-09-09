import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeporteService } from './deporte.service';
import { DeporteListComponent } from './deporte-list/deporte-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [DeporteListComponent],
  providers: [DeporteService],
  bootstrap: [DeporteListComponent]
})
export class DeporteModule { }
