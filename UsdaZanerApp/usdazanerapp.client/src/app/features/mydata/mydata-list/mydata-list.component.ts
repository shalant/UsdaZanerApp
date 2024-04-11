import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { usdaDbObject } from '../models/usdaDbObject';
import { MydataServicesService } from '../services/mydata.service';

@Component({
  selector: 'app-mydata-list',
  templateUrl: './mydata-list.component.html',
  styleUrls: ['./mydata-list.component.css']
})
export class MydataListComponent implements OnInit {

  usdaDbObjects$?: Observable<usdaDbObject[]>;

  constructor(private myDataService: MydataServicesService) {}

  ngOnInit(): void {
      this.usdaDbObjects$ = this.myDataService.getAllMyData();
  }
}
