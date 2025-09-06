import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresiaCardComponent } from './membresia-card.component';

describe('MembresiaCardComponent', () => {
  let component: MembresiaCardComponent;
  let fixture: ComponentFixture<MembresiaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembresiaCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembresiaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
