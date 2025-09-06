import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MembresiaCardComponent } from '../membresia-card/membresia-card.component';



@Component({
  selector: 'app-cliente-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,MembresiaCardComponent],
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  clienteForm!: FormGroup;
  editMode = false; // true si estamos editando
  clienteId!: string | null;
  imagenSeleccionada: File | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
    // private api: ApiService  <-- acá conectarías tu backend
  ) {}

  ngOnInit(): void {
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      imagen: [null]
    });
    // Verificamos si hay un id en la ruta
    this.clienteId = this.route.snapshot.paramMap.get('id');
    if (this.clienteId) {
      this.editMode = true;
      // 🔹 Aquí traerías datos del cliente por ID
      // this.api.getCliente(this.clienteId).subscribe(cliente => {
      //   this.clienteForm.patchValue(cliente);
      // });
    }
  }

  // 🔹 Este es el método correcto para manejar la selección del archivo
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file: File = input.files[0];
      this.imagenSeleccionada = file;
      this.clienteForm.get('imagen')?.setValue(file); // 👈 Usamos clienteForm, no miFormulario
    }
  }

  onSubmit() {
    if (this.clienteForm.invalid) return;

    if (this.editMode) {
      console.log('Actualizar cliente:', this.clienteForm.value);
      // this.api.updateCliente(this.clienteId, this.clienteForm.value).subscribe(...)
    } else {
      console.log('Crear cliente:', this.clienteForm.value);
      // this.api.createCliente(this.clienteForm.value).subscribe(...)
    }

    // Redirigir al listado
    this.router.navigate(['/gestion-clientes']);
  }

  cancelar() {
    this.router.navigate(['/gestion-clientes']);
  }
}