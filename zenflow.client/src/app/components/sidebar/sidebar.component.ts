import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isCollapsed = false;
  dropdownOpen = false;
  currentRoute = '';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // URL'yi normalize ediyoruz (sonundaki '/' kaldırılıyor)
        this.currentRoute = event.urlAfterRedirects.replace(/\/$/, '');
      }
    });
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  isActive(route: string): boolean {
    // Hem route hem currentRoute'u normalize ediyoruz
    const normalizedRoute = route.replace(/\/$/, '');
    const normalizedCurrent = this.currentRoute.replace(/\/$/, '');

    return normalizedCurrent === normalizedRoute ||
      normalizedCurrent.startsWith(`${normalizedRoute}/`);
  }
}
