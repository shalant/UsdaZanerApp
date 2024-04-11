import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { MydataListComponent } from './features/mydata/mydata-list/mydata-list.component';
import { AddMydataComponent } from './features/mydata/add-mydata/add-mydata.component';
import { UsdaDataListComponent } from './features/usda-data/usda-data-list/usda-data-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MydataListComponent,
    AddMydataComponent,
    UsdaDataListComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
