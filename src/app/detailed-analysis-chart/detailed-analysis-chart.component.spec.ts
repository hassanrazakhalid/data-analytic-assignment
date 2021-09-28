import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedAnalysisChartComponent } from './detailed-analysis-chart.component';

describe('DetailedAnalysisChartComponent', () => {
  let component: DetailedAnalysisChartComponent;
  let fixture: ComponentFixture<DetailedAnalysisChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedAnalysisChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedAnalysisChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
