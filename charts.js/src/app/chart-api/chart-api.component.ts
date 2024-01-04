import { Component, OnInit } from '@angular/core';
import { CubeApiService } from './cube-api.service';
@Component({
  selector: 'app-chart-api',
  templateUrl: './chart-api.component.html',
  styleUrls: ['./chart-api.component.css']
})
export class MyComponent implements OnInit {

  acquisitionsData: any[] = [];
  dimensionsData: any[] = [];

  constructor(private cubeApiService: CubeApiService) {}

  ngOnInit() {
    this.fetchData();
  }

  async fetchData() {
    this.acquisitionsData = await this.cubeApiService.getAquisitionsByYear();
    this.dimensionsData = await this.cubeApiService.getDimensions();
  }
}