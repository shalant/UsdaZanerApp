import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsdaDataListComponent } from './usda-data-list.component';

describe('UsdaDataListComponent', () => {
  let component: UsdaDataListComponent;
  let fixture: ComponentFixture<UsdaDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsdaDataListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsdaDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
