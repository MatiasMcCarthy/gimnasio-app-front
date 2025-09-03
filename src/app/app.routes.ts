import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { ClientesComponent } from './clientes/clientes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  // 1. Redirigir siempre la ruta raíz ('') a '/login'
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // 2. Definir la ruta del login
  { path: 'login', component: LoginComponent },

  // 3. Definir la ruta del layout y sus hijos
  {
    path: '', // Este path vacío significa que el LayoutComponent es la base para las rutas hijas
              // Pero SOLO si no se ha redirigido antes a 'login'
    component: LayoutComponent,
    children: [
      // Si el usuario ya está en el layout (por ejemplo, después de iniciar sesión)
      // y va a la ruta raíz del layout, redirigir a clientes
      { path: '', redirectTo: 'clientes', pathMatch: 'full' }, // Esta redirección solo aplica DENTRO del layout
     { path: 'clientes', component: ClientesComponent },
     { path: 'dashboard', component: DashboardComponent },
      // Aquí irán las demás rutas protegidas que usan el layout
      // Por ejemplo: { path: 'membresias', component: MembresiasComponent },
      // { path: 'entrenadores', component: EntrenadoresComponent },
    ]
  },
];