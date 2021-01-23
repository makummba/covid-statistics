import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { VoivodeshipData } from '../interfaces/voivodeship-data';
import { Observable } from 'rxjs';
import { HistoricalData } from '../interfaces/historical-data';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  private resourceUrl = '//localhost:8080';

  constructor(private http: HttpClient) {
  }

  findAllVoivodeshipStatistics(): Observable<VoivodeshipData[]> {
    return this.http.get<VoivodeshipData[]>(this.resourceUrl + '/voivodeship/grouped');
  }

  findAllHistoricalStatistics(): Observable<HistoricalData[]> {
    return this.http.get<HistoricalData[]>(this.resourceUrl + '/historical/all');
  }



}
