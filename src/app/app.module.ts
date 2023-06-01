import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampComponent } from './samp/samp.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdComponent } from './prod/prod.component';
import { ColorsComponent } from './colors/colors.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    SampComponent,
    ProdComponent,
    ColorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    BrowserAnimationsModule,
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
