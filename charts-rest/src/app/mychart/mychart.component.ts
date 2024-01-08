import { Component, OnInit } from '@angular/core';

import { Chart, registerables } from 'chart.js';
import { MasterService } from '../service/master.service';
Chart.register(...registerables)

@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css']
})
export class MychartComponent implements OnInit {

  constructor(private service: MasterService) {

  }

  chartdata: any;
  
  labeldata:any[] = []
  realdata:any[] = []
  colordata:any[] = []



  ngOnInit():void {
    this.service. Getchartinfo().subscribe(result=> {
      this.chartdata= result; 
      if(this.chartdata != null) {
        for(let i = 0; i < this.chartdata.length; i++){
          console.log(this.chartdata[i])
        }
      }
    })
    this.RenderChart()
  }
  RenderChart() {
  new Chart("piechart", {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(222, 99, 132, 1)'
        ],
        borderColor: [
          'rgba(255 99, 132, 1)'
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
  });
  }
}
