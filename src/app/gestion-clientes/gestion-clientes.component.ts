import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


interface Cliente {
  nombre: string;
  apellido: string;
  dni: string;
  telefono: string;
  direccion: string;
}

@Component({
  selector: 'app-gestion-clientes',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './gestion-clientes.component.html',
  styleUrls: ['./gestion-clientes.component.css']
})
export class GestionClientesComponent {
  searchTerm = '';
  clientes: Cliente[] = [
    { nombre: 'Juan', apellido: 'Pérez', dni: '12345678', telefono: '111-222333', direccion: 'Calle Falsa 123' },
    { nombre: 'Jhony', apellido: 'Veron', dni: '87654321', telefono: '222-333444', direccion: 'Av. Siempre Viva 742' },
    { nombre: 'Matias', apellido: 'Mc Carthy', dni: '39777100', telefono: '222-333444', direccion: 'Av. Siempre Viva 742' },
    { nombre: 'Ana', apellido: 'Gómez', dni: '87654321', telefono: '222-333444', direccion: 'Av. Siempre Viva 742' },
    { nombre: 'Ana', apellido: 'Gómez', dni: '87654321', telefono: '222-333444', direccion: 'Av. Siempre Viva 742' },
    { nombre: 'Ana', apellido: 'Gómez', dni: '87654321', telefono: '222-333444', direccion: 'Av. Siempre Viva 742' },
    { nombre: 'Ana', apellido: 'Gómez', dni: '87654321', telefono: '222-333444', direccion: 'Av. Siempre Viva 742' },
    { nombre: 'Ana', apellido: 'Gómez', dni: '87654321', telefono: '222-333444', direccion: 'Av. Siempre Viva 742' }


  ];

  constructor(private router: Router) {}

  get clientesFiltrados() {
    return this.clientes.filter(c =>
      `${c.nombre} ${c.apellido} ${c.dni}`.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  crearCliente() {
    this.router.navigate(['/cliente-form/crear']);
  }

  modifcarCliente(id:number){
    this.router.navigate(['/cliente-form/editar', id]);
  }

  eliminarCliente(){
    this.router.navigate(['/login']);
  }
}
