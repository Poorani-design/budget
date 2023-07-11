import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  myChart: Chart<'doughnut', number[], string> | undefined;
  number1 = 90;
  number2 = 100;
  number3 = 20;
  perChart: Chart<'bar', number[], unknown> | undefined;
  ngOnInit() {
    this.myChart = new Chart('myChart', {
      type: 'doughnut',
      data: {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: 'Budget details',
            data: [this.number1, this.number2, this.number3],
            backgroundColor: [
              'rgba(255, 99, 132)',
              'rgba(54, 162, 235)',
              'rgba(255, 206, 86)',
              'rgba(75, 192, 192)',
              'rgba(153, 102, 255)',
              'rgba(255, 159, 64)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
            
          },
        ],
      },
      options: {
        datasets: {
            line: {
                pointRadius: 0 // disable for all `'line'` datasets
            }
        },
        elements: {
            point: {
                radius: 0 // default to disabled in all datasets
            }
        },
        scales: {
          x: {
         
          },
          y: {
              type: 'linear',
              min: 0,
              max: 100
          }
      }
      }
    });

    // values chart
    this.perChart = new Chart('perChart', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 
        // 'Green', 'Purple', 'Orange'
      ],
        datasets: [
          {
            label: 'Budget details',
            data: [this.number1, this.number2, this.number3],
            backgroundColor: [
              'rgba(255, 99, 132)',
              'rgba(54, 162, 235)',
              'rgba(255, 206, 86)',
              'rgba(75, 192, 192)',
              'rgba(153, 102, 255)',
              'rgba(255, 159, 64)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
     
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
