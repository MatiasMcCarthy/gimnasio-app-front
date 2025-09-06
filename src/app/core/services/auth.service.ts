import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private usuarioActual: any = null;

  login(username: string, password: string): boolean {
    // 🔹 Datos hardcodeados
    const fakeUser = {
      username: 'cliente1',
      password: '1234',
      rol: 'cliente',
      datos: {
        nombre: 'Juan',
        apellido: 'Pérez',
        membresia: {
          tipo: 'Premium',
          inicio: '2025-01-01',
          fin: '2025-12-31'
        },
        clases: [
          { nombre: 'Crossfit', dia: 'Lunes', horario: '18:00' },
          { nombre: 'Yoga', dia: 'Miércoles', horario: '19:30' }
        ]
      }
    };

    if (username === fakeUser.username && password === fakeUser.password) {
      this.usuarioActual = fakeUser;
      return true;
    }
    return false;
  }

  getUsuarioActual() {
    return this.usuarioActual;
  }
}
