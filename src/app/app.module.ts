

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from  '@angular/common/http';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],

  imports: [BrowserModule,HttpClientModule,

IonicModule.forRoot(), AppRoutingModule],
  providers: [Geolocation,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
