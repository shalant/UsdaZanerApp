import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsdaDbObject } from '../models/usdaDbObject';
import { MyDataService } from '../services/mydata.service';

@Component({
  selector: 'app-mydata-list',
  templateUrl: './mydata-list.component.html',
  styleUrls: ['./mydata-list.component.css']
})

export class MydataListComponent implements OnInit {

  usdaDbObjects$?: Observable<UsdaDbObject[]>;

  constructor(private myDataService: MyDataService) {}

  ngOnInit(): void {
      this.usdaDbObjects$ = this.myDataService.getAllMyData();
      console.log(this.usdaDbObjects$);
  }
}
