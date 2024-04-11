import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydataListComponent } from './mydata-list.component';

describe('MydataListComponent', () => {
  let component: MydataListComponent;
  let fixture: ComponentFixture<MydataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MydataListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MydataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
