import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink // Asegúrate de importar RouterLink para el enlace de "Olvidaste tu contraseña"
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    username: '',
    password: ''
  };
  errorMessage: string | null = null;
  
  constructor(private router: Router) { }

  onLogin(): void {
    if (this.credentials.username === 'admin' && this.credentials.password === 'password123') {
      this.errorMessage = null;
      console.log('Login exitoso!');
      alert('Login exitoso!');
      // Redirige a la ruta principal de la aplicación
      this.router.navigate(['/clientes']); 
    } else {
      this.errorMessage = 'Credenciales inválidas. Intenta con "admin" y "password123".';
    }
  }
}