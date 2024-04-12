import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})

export class DataDisplayComponent implements OnInit {

  httpClient = inject(HttpClient)
  data: any[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data: any) => {
      console.log(data);
      this.data = data;
    });
  }


  }