import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { MydataListComponent } from './features/mydata/mydata-list/mydata-list.component';
import { AddMydataComponent } from './features/mydata/add-mydata/add-mydata.component';
import { UsdaDataListComponent } from './features/usda-data/usda-data-list/usda-data-list.component';
import { MychartComponent } from './features/mychart/mychart.component';
import { AuthService } from './features/coin-api-chart/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MydataListComponent,
    AddMydataComponent,
    UsdaDataListComponent,
    MychartComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
