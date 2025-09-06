import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICliente } from '../core/models/cliente.model';
import { MembresiaCardComponent } from '../membresia-card/membresia-card.component';
import { ClasesCardComponent } from '../clases-card/clases-card.component';

@Component({
  selector: 'app-cliente-cards',
  standalone: true,
  imports: [CommonModule, MembresiaCardComponent, ClasesCardComponent],
  templateUrl: './cliente-cards.component.html',
  styleUrls: ['./cliente-cards.component.css']
})
export class ClienteCardsComponent {
  @Input() cliente!: ICliente;
}

