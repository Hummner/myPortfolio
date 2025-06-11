import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { routes } from '../app.routes';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

  currentLang = "string"

  constructor(private translate: TranslateService) {
    translate.addLangs(['de', 'en']);
    translate.setDefaultLang('en');

    const savedLang = localStorage.getItem('lang');
    this.currentLang = savedLang ?? 'en';
    translate.use(this.currentLang);
  }

}
