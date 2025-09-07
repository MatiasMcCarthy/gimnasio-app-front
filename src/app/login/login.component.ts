import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';


interface Usuario {
  idUsuario: number;
  username: string;
  password: string;
  fotoPerfil?: string;
  idRol: 'cliente' | 'entrenador' | 'admin';
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) {}
  isRegister = false;
  errorMessage = '';
  currentUser: Usuario | null = null; // usuario logueado

  // Simulación de base de datos
  usuarios: Usuario[] = [
    { idUsuario: 0, username: 'admin', password: 'admin123', idRol: 'admin' },
    { idUsuario: 1, username: 'juan', password: 'abcd', idRol: 'cliente' }
  ];

  formData = {
    username: '',
    password: '',
    confirmPassword: '',
    rol: 'cliente',
    fotoPerfil: ''
  };

  toggleMode(event: Event) {
    event.preventDefault();

    if (!this.currentUser || this.currentUser.idRol !== 'admin') {
      this.errorMessage = '❌ Solo un administrador puede registrar nuevos usuarios';
      return;
    }

    this.isRegister = !this.isRegister;
    this.errorMessage = '';
    this.formData = { username: '', password: '', confirmPassword: '', rol: 'cliente', fotoPerfil: '' };
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.formData.fotoPerfil = file.name;
    }
  }

  onSubmit() {
    this.errorMessage = '';

    if (this.isRegister) {
      if (this.formData.password !== this.formData.confirmPassword) {
        this.errorMessage = 'Las contraseñas no coinciden';
        return;
      }

      const usuarioExiste = this.usuarios.find(u => u.username === this.formData.username);
      if (usuarioExiste) {
        this.errorMessage = 'El usuario ya existe';
        return;
      }

      const nuevoUsuario: Usuario = {
        idUsuario: this.usuarios.length + 1,
        username: this.formData.username,
        password: this.formData.password,
        fotoPerfil: this.formData.fotoPerfil,
        idRol: this.formData.rol as 'cliente' | 'entrenador'
      };

      this.usuarios.push(nuevoUsuario);
      alert('✅ Usuario registrado con éxito');
      this.toggleMode(new Event('click')); // vuelve a login
    } else {
      const user = this.usuarios.find(
        u => u.username === this.formData.username && u.password === this.formData.password
      );
      if (user) {
  this.currentUser = user;
  alert(`👋 Bienvenido, ${user.username}`);

  // Redirección según el rol
  if (user.idRol === 'admin') {
    this.router.navigate(['/gestion-clientes']);   // ejemplo de ruta para admin
  } else if (user.idRol === 'cliente') {
    this.router.navigate(['/cliente-cards']); // tu ruta clientes
  } else if (user.idRol === 'entrenador') {
    this.router.navigate(['/entrenadores']);
  }
} else {
  this.errorMessage = 'Usuario o contraseña incorrectos';
}
    }
  }
}
