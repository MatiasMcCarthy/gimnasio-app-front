import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICliente } from '../core/models/cliente.model';
import { MembresiaCardComponent } from '../membresia-card/membresia-card.component';
import { ClasesCardComponent } from '../clases-card/clases-card.component';



@Component({
  selector: 'app-cliente-cards',
  standalone: true,
  imports: [CommonModule, MembresiaCardComponent,ClasesCardComponent],
  templateUrl: './cliente-cards.component.html',
  styleUrls: ['./cliente-cards.component.css']
})
export class ClienteCardsComponent {
  @Input() cliente!: ICliente;

   clientes: ICliente[] = [
    {
      nombre: 'Juan',
      apellido: 'Pérez',
      membresia: { tipo: 'Premium', vencimiento: '2025-12-31', inicio:'2025-12-31', fin:'2025-12-31' },
      clases: [
        { nombre: 'Yoga', dia: 'Lunes', horario: '18:00' },
        { nombre: 'Crossfit', dia: 'Miércoles', horario: '19:00' }
      ]
    },
    {
      nombre: 'María',
      apellido: 'Gómez',
      membresia: { tipo: 'Básica', vencimiento: '2025-06-30',inicio:'2025-12-31', fin:'2025-12-31' },
      clases: [
        { nombre: 'Pilates', dia: 'Martes', horario: '17:00' }
      ]
    }
  ];
  


}

