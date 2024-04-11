import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UsdaInfo } from '../models/usdaInfoModel';
import { environment } from 'src/environments/environment';
import { usdaDbObject } from '../models/usdaDbObject';

@Injectable({
  providedIn: 'root'
})

export class MydataServicesService {

  constructor(private http: HttpClient) { }

  getAllMyData(): Observable<usdaDbObject[]> {
    return this.http.get<usdaDbObject[]>('{environment.oldAPI}');
  }
}




