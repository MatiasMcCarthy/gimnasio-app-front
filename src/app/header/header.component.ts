import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleHeaderService } from '../core/services/title-header.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  pageTitle$!: Observable<string>;

  constructor(private titleService: TitleHeaderService) {
    this.pageTitle$ = this.titleService.title$; // ahora se inicializa correctamente
  }
}
