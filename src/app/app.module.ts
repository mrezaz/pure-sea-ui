import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './modules/material/material.module';
import { RoutingModule } from './modules/routing/routing.module';

import { CnnService } from './services/cnn.service';
import { TwitterService } from './services/twitter.service';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { CnnComponent } from './components/cnn/cnn.component';
import { TwitterComponent } from './components/twitter/twitter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CnnComponent,
    TwitterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    RoutingModule
  ],
  providers: [
    CnnService,
    TwitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
