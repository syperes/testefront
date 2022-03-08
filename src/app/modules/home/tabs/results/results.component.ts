import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTheme,
  ApexTitleSubtitle,
  ApexFill,
  ApexStroke,
  ApexYAxis,
  ApexLegend,
  ApexPlotOptions, ChartComponent
} from "ng-apexcharts";

// import Swiper core and required modules
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {ApiRequestsService} from "../../../../services/api-requests.service";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
  fill: ApexFill,
  yaxis: ApexYAxis,
  stroke: ApexStroke,
  legend: ApexLegend,
  plotOptions: ApexPlotOptions
};

export type ChartOptionsCircle = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
  responsive: ApexResponsive[];
};

@Component({
  selector: 'home-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ResultsComponent implements OnInit {

  //@ViewChild("chart") chart: ChartComponent|null = null;

  public chartOptions: ChartOptionsCircle;

  public chartLabels = ['Clareza', 'Objetividade', 'Compreensão'];
  public chartSeries: ApexNonAxisChartSeries = [35,30,40, /*40,35,30*/];
  public chart: ApexChart = {width: 280, type: 'polarArea'};
  public chartTitle: ApexTitleSubtitle = {text: ''};
  public chartTheme: ApexTheme = {
    monochrome: {
      //    enabled: true,
      shadeTo: 'light',
      shadeIntensity: 0.6
    }
  };
  public chartFill: ApexFill = {opacity: 1, colors: ['#00A79D','#5AD3A0','#047453']};
  public chartYaxis: ApexYAxis = {show: false};
  public chartStroke: ApexStroke = {width: 0, colors: undefined};
  public chartLegend: ApexLegend = {position: 'bottom', show: false, floating: false};
  public chartPlotOptions: ApexPlotOptions = {
    polarArea: {
      rings: {
        strokeWidth: 0
      }
    }
  };

  public swiperSlideBreakpoints = {
    '320': {
      slidesPerView: 2,
      spaceBetween: 10
    },
    /*'768': {
      slidesPerView: 3,
    }*/
  }

  public swiperSlidePagination = {
    dynamicBullets: true,
    clickable: true
  }

  public certificateData = {
    certificateName: '',
    currentPoints: '0',
    maxLevelPoints: '0',
    pointsLabel: '',
  }

  public finishedAt = '';
  public strengths: any[] = [];
  public areas: any[] = [];

  constructor(private api: ApiRequestsService) {

    this.api.getDataFromApi().subscribe((data: any) => {
      this.certificateData = data.results.certificate;
      this.finishedAt = data.results.feedback.finishedAt;
      this.strengths = data.results.strengths;
      this.areas = data.results.areas;
    });

    this.chartOptions = {
      series: [65],
      chart: {
        height: 170,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          startAngle: 0,
          hollow: {
            margin: 0,
            size: "95%",
            background: "transparent",
            image: undefined,
            position: "front",
          },
          track: {
            background: "#fff",
            strokeWidth: "1px",
            margin: 0, // margin is in pixels
          },

          dataLabels: {
            show: false,
          }
        }
      },
      fill: {
        type: "color",
        colors: ['#00A79D']
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Percent"],
      responsive: [
        {
          breakpoint: 600,
          options: {
            //series: [10],
            chart: {
              height: 120
            },
          }
        }
      ]
    };

  }

  ngOnInit(): void {
    setTimeout(() => this.setFloatingLabelsPositions(), 1000);
  }

  setFloatingLabelsPositions() {
    this.chartLabels.forEach(label => {
      let gData: any = document.querySelector('g[seriesName="'+label+'"]');
      if (!gData)
        return;

      gData = gData.getBoundingClientRect();
      let elem:any = document.querySelector('[data-value="'+label+'"]');

      if (!elem)
        return;

      elem.dataset.gX = gData.x;
      elem.style.left = (gData.x - elem.clientWidth)+'px';
      elem.style.top = (gData.y - elem.clientHeight)+'px';
    });
  }


}
