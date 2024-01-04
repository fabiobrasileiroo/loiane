import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartAnosComponent } from './chart-anos/chart-anos.component';
import { ChartApiComponent } from './chart-api/chart-api.component'


@NgModule({
  declarations: [
    AppComponent,
    ChartAnosComponent,
    ChartApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
