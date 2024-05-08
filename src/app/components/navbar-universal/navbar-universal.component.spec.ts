import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarUniversalComponent } from './navbar-universal.component';

describe('NavbarUniversalComponent', () => {
  let component: NavbarUniversalComponent;
  let fixture: ComponentFixture<NavbarUniversalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarUniversalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarUniversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
