import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarNavbarComponent } from "./shared/components/sidebar-navbar/sidebar-navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarNavbarComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {

  private _router = inject(Router);

  isAuthRoute(): boolean {
    return this._router.url.includes('/auth');
  }
}
