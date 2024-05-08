import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinuarAssistindoComponent } from './continuar-assistindo.component';

describe('ContinuarAssistindoComponent', () => {
  let component: ContinuarAssistindoComponent;
  let fixture: ComponentFixture<ContinuarAssistindoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinuarAssistindoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContinuarAssistindoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
