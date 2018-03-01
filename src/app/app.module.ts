import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewsComponent } from './components/news/news.component';
import { SpeedZonesComponent } from './components/dashboard/speed-zones/speed-zones.component';
import { CountByZonesComponent } from './components/dashboard/count-by-zones/count-by-zones.component';
import { SpeedAverageComponent } from './components/dashboard/speed-average/speed-average.component';

import { AppRoutingModule } from './app-routing.module';
import { JsondataService } from './jsondata.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NewsComponent,
    SpeedZonesComponent,
    CountByZonesComponent,
    SpeedAverageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [JsondataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
