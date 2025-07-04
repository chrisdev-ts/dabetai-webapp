import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar-navbar',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './sidebar-navbar.component.html',
  styleUrls: ['./sidebar-navbar.component.scss'],
})
export class SidebarNavbarComponent implements OnInit {
  ngOnInit(): void {
    this.applyThemeSettings();
    this.setupThemeToggle();
  }

  /** Aplica los ajustes de tema al cargar la página */
  private applyThemeSettings(): void {
    const isDarkMode =
      localStorage.getItem('color-theme') === 'dark' ||
      (!localStorage.getItem('color-theme') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    document.documentElement.classList.toggle('dark', isDarkMode);

    this.updateThemeIcons(isDarkMode);
  }

  /** Configura el botón de cambio de tema */
  private setupThemeToggle(): void {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) return;

    themeToggleBtn.addEventListener('click', () => {
      const htmlElement = document.documentElement;
      const isDarkMode = htmlElement.classList.contains('dark');

      // Añade clase de transición temporal
      htmlElement.classList.add('theme-transition');

      setTimeout(() => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        htmlElement.classList.toggle('dark', !isDarkMode);
        localStorage.setItem('color-theme', newTheme);
        this.updateThemeIcons(!isDarkMode);

        // Remueve la clase de transición después de la animación
        htmlElement.classList.remove('theme-transition');
      }, 10);
    });
  }

  /** Actualiza los íconos de modo claro/oscuro */
  private updateThemeIcons(isDarkMode: boolean): void {
    const themeToggleDarkIcon = document.getElementById(
      'theme-toggle-dark-icon'
    );
    const themeToggleLightIcon = document.getElementById(
      'theme-toggle-light-icon'
    );

    if (themeToggleDarkIcon && themeToggleLightIcon) {
      themeToggleDarkIcon.classList.toggle('hidden', isDarkMode);
      themeToggleLightIcon.classList.toggle('hidden', !isDarkMode);
    }
  }
}
