import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export class WorksComponent {
  images = ["laptop_0"];
  projectKeys = ['join', 'sharkie', 'crm', 'pokedex'];
  projectLinks = ['http://join.bence-cservenyak.com', 'http://sharkie.bence-cservenyak.com', '', 'http://pokodex.bence-cservenyak.com/']
  githubLinks = ['https://github.com/Hummner/join-448', 'https://github.com/Hummner/sharkie', '', 'https://github.com/Hummner/Pokodex']

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
