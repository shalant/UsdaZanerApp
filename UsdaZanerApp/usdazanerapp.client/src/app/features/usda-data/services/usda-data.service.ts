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

  // getUsdaData(): Observable<UsdaInfo[]> {
  //   return this.http.get<UsdaInfo[]>(`${environment.usdaQuickStatUrl}`);
  // }
}
