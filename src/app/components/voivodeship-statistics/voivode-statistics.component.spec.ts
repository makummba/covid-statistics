import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoivodeStatisticsComponent } from './voivode-statistics.component';

describe('VoivodeStatisticsComponent', () => {
  let component: VoivodeStatisticsComponent;
  let fixture: ComponentFixture<VoivodeStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoivodeStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoivodeStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
