import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsdaInfo } from '../models/usdaInfoModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UsdaDataService {

  constructor(private http: HttpClient) {}

  getUsdaData(): Observable<UsdaInfo[]> {
    // return this.http.get<UsdaInfo[]>(`${environment.apiBaseUrl}/api/UsdaInfo`);
    return this.http.get<UsdaInfo[]>(`https://quickstats.nass.usda.gov/api/api_GET/?key=C2ADF26B-BD8D-328A-968F-2F175A287144&&statisticcat_desc=AREA PLANTED&unit_desc=ACRES&year__GE=2020/api/UsdaInfo`);

  }
}
