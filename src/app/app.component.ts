import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/footer/footer.component";
import { HeaderComponent } from "./shared/header/header.component";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Bence Cservenyak - Portfolio';

  constructor(private translate: TranslateService, private router: Router) {
    translate.addLangs(['de', 'en']);
    translate.setDefaultLang('en');

    const savedLang = localStorage.getItem('lang') ?? 'en';
    translate.use(savedLang);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const lang = localStorage.getItem('lang') ?? 'en';
        translate.use(lang);
      }
    });
  }
}