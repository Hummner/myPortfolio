import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

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

  constructor(private translate: TranslateService) {
    translate.addLangs(['de', 'en']);
    this.currentLang = 'en';
    translate.setDefaultLang('en');
    translate.use('en'); // ← immer EN beim Start
  }



  burgerOpen() {
    this.isMenuOpen = !this.isMenuOpen;
  }



  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['home', 'about_me', 'skills', 'portfolio'];
    for (let section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  switchLanguage(lang: 'de' | 'en') {
    this.currentLang = lang;
    this.translate.use(lang);
  }

}
