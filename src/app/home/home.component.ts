import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import {CardModule} from 'primeng/card';
import {ChartModule} from 'primeng/chart';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, CardModule, ChartModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: any;
  secondData: any;
  options: any;
  secondOptions: any;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Dashboard');
  }

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December'],
      datasets: [
        {
          label: 'Strom',
          data: [12, 51, 62, 33, 21, 12, 45, 12, 51, 62, 33, 21],
          fill: true,
          borderColor: documentStyle.getPropertyValue('--blue-600'),
        }
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.9,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        }
      }
    };

    this.secondData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December'],
      datasets: [
        {
          label: 'Druckluft',
          data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56],
          fill: true,
          tension: 0.4,
          borderColor: documentStyle.getPropertyValue('--green-500')
        }
      ]
    };

    this.secondOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.9,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        }
      }
    };

  }
}
