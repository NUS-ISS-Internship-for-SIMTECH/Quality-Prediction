import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorCustomSampleComponent } from './indicator-custom-sample.component';

describe('IndicatorCustomSampleComponent', () => {
  let component: IndicatorCustomSampleComponent;
  let fixture: ComponentFixture<IndicatorCustomSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorCustomSampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicatorCustomSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
