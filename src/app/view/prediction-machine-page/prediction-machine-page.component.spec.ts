import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionMachinePageComponent } from './prediction-machine-page.component';

describe('PredictionMachinePageComponent', () => {
  let component: PredictionMachinePageComponent;
  let fixture: ComponentFixture<PredictionMachinePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictionMachinePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictionMachinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
