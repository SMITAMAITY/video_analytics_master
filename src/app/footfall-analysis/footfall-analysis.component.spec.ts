import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootfallAnalysisComponent } from './footfall-analysis.component';

describe('FootfallAnalysisComponent', () => {
  let component: FootfallAnalysisComponent;
  let fixture: ComponentFixture<FootfallAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FootfallAnalysisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FootfallAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
