import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MydataListComponent } from './features/mydata/mydata-list/mydata-list.component';
import { UsdaDataListComponent } from './features/usda-data/usda-data-list/usda-data-list.component';

const routes: Routes = [
  {
    path: 'mydata',
    component: MydataListComponent
  },
  {
    path: 'usdadata',
    component: UsdaDataListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
