import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-coin-api-chart',
  standalone: true,
  imports: [],
  templateUrl: './coin-api-chart.component.html',
  styleUrls: ['./coin-api-chart.component.css']
})

export class CoinApiChartComponent {

  result: any;
  coinPrice: any;
  coinName: any;
  chart: any = [];

  constructor(private service: AuthService) {}

  ngOnInit() {
    this.service.cryptoData().then((res) => {
      this.result = res;
      console.log(this.result);
    })
  }
}
