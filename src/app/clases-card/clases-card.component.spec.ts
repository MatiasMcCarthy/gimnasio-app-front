import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasesCardComponent } from './clases-card.component';

describe('ClasesCardComponent', () => {
  let component: ClasesCardComponent;
  let fixture: ComponentFixture<ClasesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
