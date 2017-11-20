import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedersComponent } from './breeders.component';

describe('breedersComponent', () => {
  let component: BreedersComponent;
  let fixture: ComponentFixture<BreedersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
