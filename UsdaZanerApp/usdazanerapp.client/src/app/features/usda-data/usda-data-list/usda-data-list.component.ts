import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsdaInfo } from '../models/usdaInfoModel';
import { UsdaDataService } from '../services/usda-data.service';

@Component({
  selector: 'app-usda-data-list',
  templateUrl: './usda-data-list.component.html',
  styleUrls: ['./usda-data-list.component.css']
})

export class UsdaDataListComponent implements OnInit {
  
  usdaInfos$?: Observable<UsdaInfo[]>

  constructor(private usdaDataService: UsdaDataService) {}

  ngOnInit(): void {
      this.usdaInfos$ = this.usdaDataService.getUsdaData();
  }
  
}
