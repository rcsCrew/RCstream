import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmePComponent } from './filme-p.component';

describe('FilmePComponent', () => {
  let component: FilmePComponent;
  let fixture: ComponentFixture<FilmePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmePComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilmePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
