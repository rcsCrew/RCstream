import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnUniversalComponent } from './btn-universal.component';

describe('BtnUniversalComponent', () => {
  let component: BtnUniversalComponent;
  let fixture: ComponentFixture<BtnUniversalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnUniversalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnUniversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
