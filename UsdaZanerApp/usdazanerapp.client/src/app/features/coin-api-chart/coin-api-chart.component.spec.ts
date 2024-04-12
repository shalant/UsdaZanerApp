import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinApiChartComponent } from './coin-api-chart.component';

describe('CoinApiChartComponent', () => {
  let component: CoinApiChartComponent;
  let fixture: ComponentFixture<CoinApiChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoinApiChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoinApiChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
