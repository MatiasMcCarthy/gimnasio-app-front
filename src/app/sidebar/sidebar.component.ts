import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TitleHeaderService } from '../core/services/title-header.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private titleService: TitleHeaderService) {}

  menuItems = [
    { icon: '🏠', title: 'Dashboard', route: '/dashboard' },
    { icon: '👤', title: 'Clientes', route: '/gestion-clientes' },
    { icon: '💪', title: 'Entrenadores', route: '/entrenadores' },
    { icon: '📅', title: 'Clases', route: '/clases' },
    { icon: '🛠️', title: 'Usuarios', route: '/usuarios' },
  ];

  setTitle(title: string) {
    this.titleService.setTitle(title);
  }
}
