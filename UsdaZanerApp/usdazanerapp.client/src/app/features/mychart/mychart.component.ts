import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js' 

Chart.register(...registerables);

@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css']
})
export class MychartComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
      this.RenderChart();
  }

  RenderChart() {
    const myChart = new Chart("piechart", {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [92,18,1,5,2,3],
          backgroundColor: [
            'rgba(255,99,132,0.2',
            'rgba(54,162,235,0.2',
            'rgba(255,206,86,0.2',
            'rgba(25,192,192,0.2',
            'rgba(153,102,255,0.2',
            'rgba(255,159,64,0.2',
          ],
          borderColor: [
            'rgba(255,99,132,1',
            'rgba(54,162,235,1',
            'rgba(255,206,86,1',
            'rgba(25,192,192,1',
            'rgba(153,102,255,1',
            'rgba(255,159,64,1',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  }

}
