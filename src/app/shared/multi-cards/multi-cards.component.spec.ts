import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiCardsComponent } from './multi-cards.component';

describe('MultiCardsComponent', () => {
  let component: MultiCardsComponent;
  let fixture: ComponentFixture<MultiCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiCardsComponent]
    });
    fixture = TestBed.createComponent(MultiCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
