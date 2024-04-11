import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UsdaInfo } from '../models/usdaInfoModel';
import { environment } from 'src/environments/environment';
import { UsdaDbObject } from '../models/usdaDbObject';

@Injectable({
  providedIn: 'root'
})

export class MyDataService {

  constructor(private http: HttpClient) { }

  getAllMyData(): Observable<UsdaDbObject[]> {
    // return this.http.get<UsdaDbObject[]>(`${environment.apiBaseUrl}/api/UsdaInfo`);
    return this.http.get<UsdaDbObject[]>('https://localhost:7105/api/UsdaInfo');

  }
}




