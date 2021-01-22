import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { StatisticsService } from '../../services/statistics-service.service';
import { VoivodeshipData } from '../../interfaces/voivodeship-data';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-voivode-statistics',
  templateUrl: 'voivode-statistics.component.html',
  styleUrls: ['voivode-statistics.component.scss']
})
export class VoivodeStatisticsComponent implements AfterViewInit {


  displayedColumns: any[];
  dataSource: MatTableDataSource<VoivodeshipData>;


  constructor(private service: StatisticsService) {
    this.displayedColumns = [
      'voivodeship',
      'numberOfInfection',
      'numberFor10Citizens',
      'numberOfDeaths',
      'numberOfDeathsWithOtherSick',
      'numberOfDeathsWithoutOtherSick',
    ];
    this.service.findAllVoivodeshipStatistics().subscribe(resp =>  {
      this.dataSource = new MatTableDataSource(resp);
    });

  }

  ngAfterViewInit(): void {
  }



}
