import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmHonraComponent } from './em-honra.component';

describe('EmHonraComponent', () => {
  let component: EmHonraComponent;
  let fixture: ComponentFixture<EmHonraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmHonraComponent]
    });
    fixture = TestBed.createComponent(EmHonraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
