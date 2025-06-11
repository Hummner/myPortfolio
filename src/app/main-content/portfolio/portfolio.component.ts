import { Component, OnInit } from '@angular/core';
import { WorksComponent } from "./works/works.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import AOS from 'aos';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [WorksComponent, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.addLangs(['de', 'en']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

    ngOnInit(): void {
      AOS.init();
    }
  

  switchLanguage() {
    const newLang = this.translate.currentLang === 'de' ? 'en' : 'de';
    this.translate.use(newLang);
  }
}
