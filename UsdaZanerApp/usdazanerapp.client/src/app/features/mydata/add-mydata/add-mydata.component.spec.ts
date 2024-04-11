import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMydataComponent } from './add-mydata.component';

describe('AddMydataComponent', () => {
  let component: AddMydataComponent;
  let fixture: ComponentFixture<AddMydataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMydataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
