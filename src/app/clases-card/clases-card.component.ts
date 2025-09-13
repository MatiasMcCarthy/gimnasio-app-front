import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IClase } from '../core/models/cliente.model';

@Component({
  selector: 'app-clases-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clases-card.component.html',
  styleUrls: ['./clases-card.component.css']
})
export class ClasesCardComponent {
  @Input() clases: IClase[] = [];




}

