import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-work-in-progress',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './work-in-progress.component.html',
  styleUrl: './work-in-progress.component.scss'
})
export class WorkInProgressComponent {

  constructor(private translate: TranslateService) {
    translate.addLangs(['de', 'en']);
    translate.setDefaultLang('en');
    translate.use('en');
  }
  

  switchLanguage() {
    const newLang = this.translate.currentLang === 'de' ? 'en' : 'de';
    this.translate.use(newLang);
  }

}
