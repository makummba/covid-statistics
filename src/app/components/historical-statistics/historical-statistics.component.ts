import { Component } from '@angular/core';
import { StatisticsService } from '../../services/statistics-service.service';
import { HistoricalData } from '../../interfaces/historical-data';
import * as CanvasJS from 'src/assets/libraries/canvasjs.min.js';
import { DataPoint } from '../../interfaces/chart-data';

@Component({
  selector: 'app-historical-statistics',
  templateUrl: 'historical-statistics.component.html',
  styleUrls: ['historical-statistics.component.scss']
})
export class HistoricalStatisticsComponent {

  data: HistoricalData[];
  chart: any;
  private newCasesDataPoints: DataPoint[] = [];
  private allCasesDataPoints: DataPoint[] = [];
  private deathsDataPoints: DataPoint[] = [];
  private allCumulativeDataPoints: DataPoint[] = [];
  private recoveredDataPoints: DataPoint[] = [];
  private allRecoveredDataPoints: DataPoint[] = [];
  private activeCasesDataPoints: DataPoint[] = [];
  private hospitalCasesDataPoints: DataPoint[] = [];
  private quarantineCasesDataPoints: DataPoint[] = [];
  private monitoringCasesDataPoints: DataPoint[] = [];
  private occupiedBedsDataPoints: DataPoint[] = [];
  private respiratorsDataPoints: DataPoint[] = [];


  constructor(private service: StatisticsService) {
    this.service.findAllHistoricalStatistics().subscribe(resp => {
      this.data = resp;
      this.calculatePoints();
      this.renderChart();
    });
  }

  private calculatePoints(): void {
    this.data.forEach(data => {
      this.createDataPoints(data);
    });

  }

  private createDataPoints(data: HistoricalData): void {
    let measureDay = new Date(data.measureDay);
    this.newCasesDataPoints.push({x: measureDay, y: data.newCases});
    this.activeCasesDataPoints.push({x: measureDay, y: data.activeCases});
    this.allCasesDataPoints.push({x: measureDay, y: data.allCases});
    this.deathsDataPoints.push({x: measureDay, y: data.deaths});
    this.allCumulativeDataPoints.push({x: measureDay, y: data.allCumulative});
    this.recoveredDataPoints.push({x: measureDay, y: data.recovered});
    this.allRecoveredDataPoints.push({x: measureDay, y: data.allRecovered});
    this.cleanEmptyHospitalCases(measureDay, data);
    this.quarantineCasesDataPoints.push({x: measureDay, y: data.quarantineCases});
    this.monitoringCasesDataPoints.push({x: measureDay, y: data.monitoringCases});
    this.occupiedBedsDataPoints.push({x: measureDay, y: data.occupiedBeds});
    this.respiratorsDataPoints.push({x: measureDay, y: data.respirators});
  }

  private cleanEmptyHospitalCases(date, data: HistoricalData) {
    if (date < new Date(2020, 5, 16)) {
      this.hospitalCasesDataPoints.push({x: date, y: data.hospitalCases});
    }
  }
  private renderChart(): void {
    // @ts-ignore
    this.chart = new CanvasJS.Chart('chartContainer', {
      zoomEnabled: true,
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Historical Covid-19 Statistics'
      },
      legend: {
        cursor: 'pointer',
        verticalAlign: 'top',
        horizontalAlign: 'center',
        dockInsidePlotArea: true,
      },
      axisX: {
        valueFormatString: 'MMM YYYY'
      },
      axisY2: {
        title: 'Number'
      },
      toolTip: {
        shared: true
      },
      data: [{
        type: 'line',
        name: 'New Cases',
        showInLegend: true,
        markerSize: 0,
        dataPoints: this.newCasesDataPoints
      },
        {
          type: 'line',
          name: 'All Cases',
          showInLegend: true,
          markerSize: 1,
          dataPoints: this.allCasesDataPoints
        },
        {
          type: 'line',
          name: 'Deaths',
          showInLegend: true,
          markerSize: 1,
          dataPoints: this.deathsDataPoints
        },
        {
          type: 'line',
          name: 'All Cumulative',
          showInLegend: true,
          markerSize: 1,
          dataPoints: this.allCumulativeDataPoints
        },
        {
          type: 'line',
          name: 'Recovered',
          showInLegend: true,
          markerSize: 1,
          dataPoints: this.recoveredDataPoints
        },
        {
          type: 'line',
          name: 'All Recovered',
          showInLegend: true,
          markerSize: 1,
          dataPoints: this.allRecoveredDataPoints
        },
        {
          type: 'line',
          name: 'Active Cases',
          showInLegend: true,
          markerSize: 1,
          dataPoints: this.allCasesDataPoints
        },
        {
          type: 'line',
          name: 'Hospital Cases',
          showInLegend: true,
          markerSize: 1,
          dataPoints: this.hospitalCasesDataPoints
        },
        {
          type: 'line',
          name: 'Quarantine',
          showInLegend: true,
          markerSize: 1,
          dataPoints: this.quarantineCasesDataPoints
        },
        {
          type: 'line',
          name: 'Monitoring',
          showInLegend: true,
          markerSize: 1,
          dataPoints: this.monitoringCasesDataPoints
        },
        {
          type: 'line',
          name: 'Occupied Beds',
          showInLegend: true,
          markerSize: 1,
          dataPoints: this.occupiedBedsDataPoints
        },
        {
          type: 'line',
          name: 'Respirators',
          showInLegend: true,
          markerSize: 1,
          dataPoints: this.respiratorsDataPoints
        }
      ]
    });

    this.chart.render();
  }
}
