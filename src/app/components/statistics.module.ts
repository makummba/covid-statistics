import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HistoricalStatisticsComponent } from './historical-statistics/historical-statistics.component';
import { RouterModule, Routes } from '@angular/router';
import { VoivodeStatisticsComponent } from './voivodeship-statistics/voivode-statistics.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const routes: Routes = [
  {
    path: '',
    component: HistoricalStatisticsComponent
  },
  {
    path: 'historical',
    component: HistoricalStatisticsComponent
  },
  {
    path: 'voivodeship',
    component: VoivodeStatisticsComponent,
  }
];

@NgModule({
  declarations: [HistoricalStatisticsComponent,
    VoivodeStatisticsComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(routes)
  ],
  providers: [DatePipe],
  exports: [RouterModule]
})
export class StatisticsModule { }
