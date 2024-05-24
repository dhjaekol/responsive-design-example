import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'wombat-coffee';

  toggleMenu(e: Event) {
    e.preventDefault();
    let menu = document.getElementById('main-menu');
    menu?.classList.toggle('is-open');
  }
}
