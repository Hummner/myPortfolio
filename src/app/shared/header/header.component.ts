import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isMenuOpen = false;
  activeSection: string = '';
  currentLang = 'en';

  constructor(private translate: TranslateService, private router: Router) {
  translate.addLangs(['de', 'en']);
  translate.setDefaultLang('en');

  const savedLang = localStorage.getItem('lang') ?? 'en';
  this.currentLang = savedLang;
  translate.use(this.currentLang);

  this.router.events.subscribe(() => {
    const lang = localStorage.getItem('lang') ?? 'en';
    if (this.currentLang !== lang) {
      this.currentLang = lang;
      this.translate.use(lang);
    }
  });
}


  burgerOpen() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.router.url.includes('#')) {
      this.activeSection = '';
      return;
    }

    const sections = ['home', 'about_me', 'skills', 'portfolio'];
    for (let section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = section;
          return;
        }
      }
    }

    this.activeSection = '';
  }


  switchLanguage(lang: 'de' | 'en') {
    this.currentLang = lang;
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}
