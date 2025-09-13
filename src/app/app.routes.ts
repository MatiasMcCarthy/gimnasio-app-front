import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClienteCardsComponent } from './cliente-cards/cliente-cards.component';
import { GestionClientesComponent } from './gestion-clientes/gestion-clientes.component';
import { MembresiaCardComponent } from './membresia-card/membresia-card.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';

export const routes: Routes = [
  // Ruta raíz → redirige al login
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Login fuera del layout
  { path: 'login', component: LoginComponent },

  // Todas las rutas internas usan el Layout
  {
    path: '',
    component: LayoutComponent,
    children: [
      // Redirigir al dashboard por defecto cuando se entra al layout
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      { path: 'dashboard', component: DashboardComponent },
      { path: 'cliente-cards', component: ClienteCardsComponent },
      { path: 'gestion-clientes', component: GestionClientesComponent },
      { path: 'membresia-card', component: MembresiaCardComponent },
      { path: 'cliente-form/crear', component: ClienteFormComponent },
      { path: 'cliente-form/editar/:id', component: ClienteFormComponent },
      {path: 'usuarios', component:LoginComponent, data:{mode:'register'}}

      // 🔒 acá podés seguir agregando las demás secciones protegidas
      // { path: 'entrenadores', component: EntrenadoresComponent },
      // { path: 'usuarios', component: UsuariosComponent },
      // etc.
    ]
  },

  // Catch-all → cualquier ruta no encontrada redirige a login
  { path: '**', redirectTo: 'login' }
];
