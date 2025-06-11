import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentLang = "";
  
  constructor(private translate: TranslateService, private router: Router) {
    const savedLang = localStorage.getItem('lang') ?? 'en';
    this.currentLang = savedLang;
    translate.use(savedLang);

    this.router.events.subscribe(() => {
      const lang = localStorage.getItem('lang') ?? 'en';
      if (this.currentLang !== lang) {
        this.currentLang = lang;
        this.translate.use(lang);
      }
    });
  }


  switchLanguage() {
    const newLang = this.translate.currentLang === 'de' ? 'en' : 'de';
    this.translate.use(newLang);
  }
}
