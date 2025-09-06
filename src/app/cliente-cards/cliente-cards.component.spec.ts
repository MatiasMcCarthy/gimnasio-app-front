import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCardsComponent } from './cliente-cards.component';

describe('ClienteCardsComponent', () => {
  let component: ClienteCardsComponent;
  let fixture: ComponentFixture<ClienteCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
