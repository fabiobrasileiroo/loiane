import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAnosComponent } from './chart-anos.component';

describe('ChartAnosComponent', () => {
  let component: ChartAnosComponent;
  let fixture: ComponentFixture<ChartAnosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartAnosComponent]
    });
    fixture = TestBed.createComponent(ChartAnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
