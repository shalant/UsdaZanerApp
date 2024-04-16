import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MydataListComponent } from './features/mydata/mydata-list/mydata-list.component';
import { UsdaDataListComponent } from './features/usda-data/usda-data-list/usda-data-list.component';
import { MychartComponent } from './features/mychart/mychart.component';
import { CoinApiChartComponent } from './features/coin-api-chart/coin-api-chart.component';
import { DataDisplayComponent } from './features/data-display/data-display.component';

const routes: Routes = [
  {
    path: 'mydata',
    component: MydataListComponent
  },
  {
    path: 'usdadata',
    component: UsdaDataListComponent
  },
  {
    path: 'mychart',
    component: MychartComponent
  },
  {
    path: 'coinapichart',
    component: CoinApiChartComponent
  },
  {
    path: 'datadisplay',
    component: DataDisplayComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
