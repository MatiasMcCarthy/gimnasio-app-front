import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMembresia } from '../core/models/cliente.model';

@Component({
  selector: 'app-membresia-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './membresia-card.component.html',
  styleUrls: ['./membresia-card.component.css']
})
export class MembresiaCardComponent {
  @Input() membresia!: IMembresia;
  
}
