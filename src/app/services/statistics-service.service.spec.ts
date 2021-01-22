import { TestBed } from '@angular/core/testing';

import { StatisticsService } from './statistics-service.service';

describe('StatisticsService tests', () => {
  let service: StatisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#findAllVoivodeshipStatistics should return observable',
    (done: DoneFn) => {
      service.findAllVoivodeshipStatistics().subscribe(value => {
        expect(value.length).toBeGreaterThan(0);
        done();
      });
    });

  it('#findAllHistoricalStatistics should return observable',
    (done: DoneFn) => {
      service.findAllHistoricalStatistics().subscribe(value => {
        expect(value.length).toBeGreaterThan(0);
        done();
      });
    });
});
