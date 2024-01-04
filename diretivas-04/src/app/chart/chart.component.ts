import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  data = [300, 500, 100];
  options = {
    title: {
      text: 'Sales by Channel'
    }
  };

  constructor(private chart: Chart) {}

  ngOnInit() {
    this.chart.draw(this.data, this.labels, this.options);
  }

}
