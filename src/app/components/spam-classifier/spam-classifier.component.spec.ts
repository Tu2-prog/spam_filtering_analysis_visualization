import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpamClassifierComponent } from './spam-classifier.component';

describe('SpamClassifierComponent', () => {
  let component: SpamClassifierComponent;
  let fixture: ComponentFixture<SpamClassifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpamClassifierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpamClassifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
