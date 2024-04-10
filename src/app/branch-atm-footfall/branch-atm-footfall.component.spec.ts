import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchAtmFootfallComponent } from './branch-atm-footfall.component';

describe('BranchAtmFootfallComponent', () => {
  let component: BranchAtmFootfallComponent;
  let fixture: ComponentFixture<BranchAtmFootfallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BranchAtmFootfallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BranchAtmFootfallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
