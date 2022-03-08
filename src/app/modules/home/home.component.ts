import { Component, OnInit, ViewChild } from '@angular/core';


import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ApexStroke,
  ChartComponent, ApexResponsive
} from "ng-apexcharts";
import {ApiRequestsService} from "../../services/api-requests.service";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke,
  responsive: ApexResponsive[]
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public chartOptions: ChartOptions;
  public tabItems = [
    {
      key: 'activities',
      label: 'Atividades',
    },
    {
      key: 'results',
      label: 'Resultados'
    },
    {
      key: 'plan',
      label: 'Plano de desenvolvimento'
    }
  ];

  currentTab: string = 'activities';
  // currentTab: string = 'results';

  constructor(private api: ApiRequestsService) {
    this.chartOptions = {
      series: [25],
      chart: {
        type: "radialBar",
        offsetY: -20,
      },
      stroke: {
        lineCap: 'round',
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#e7e7e7",
            strokeWidth: "97%",
            margin: 5, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2
            }
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: -2,
              fontSize: "24px",
              color: 'white'
            }
          }
        }
      },
      fill: {
        type: "gradient",
        colors: ['#FA8B09', '#FFC700'],
        gradient: {
          shade: "light",
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91]
        }
      },
      labels: ["Average Results"],
      responsive: [
        {
          breakpoint: 600,
          options: {
            //series: [10],
            chart: {
              height: 150
            },
            plotOptions: {
              radialBar: {
                dataLabels: {
                  value: {
                    fontSize: '19px'
                  }
                }
              }
            },
          }
        }
      ]
    };

    const setStroke = () => {
      const stroke1: any = document.querySelector('.apexcharts-radial-series [stroke-linecap="round"]');
      if (stroke1) {
        stroke1.style.strokeWidth = '7px';

        /*if (this.chartOptions.plotOptions.radialBar?.dataLabels?.value)
          this.chartOptions.plotOptions.radialBar.dataLabels.value.fontSize = '2px';*/


        // const clonedStroke = stroke1.cloneNode();
        // stroke1.parentNode.prepend(clonedStroke);
      }
    };

    setTimeout(setStroke, 10);
    window.addEventListener('resize', () => {
      setTimeout(setStroke, 200);
    });
  }

  ngOnInit(): void {
  }

  onChangeTab(activeKey: any) {
    this.currentTab = activeKey;
  }

}
