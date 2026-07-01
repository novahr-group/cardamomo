import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocaleService } from '../../services/locale.service';
import { Lang } from '../../i18n/translations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen = signal(false);
  scrolled = signal(false);

  constructor(readonly locale: LocaleService) {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 60);
  }

  setLang(lang: Lang): void {
    this.locale.setLang(lang);
    this.closeMenu();
  }

  toggleMenu(): void {
    this.menuOpen.update(open => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
