import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LayoutComponent,LoginComponent],
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gimnasio-app-front';
}