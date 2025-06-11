import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import AOS from 'aos';
import { AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export class WorksComponent implements AfterViewInit, AfterViewChecked {
  images = ["laptop_0"];
  projectKeys = ['join', 'sharkie', 'crm', 'pokedex'];
  projectLinks = ['http://join.bence-cservenyak.com', 'http://sharkie.bence-cservenyak.com', '/work-in-progress', 'http://pokodex.bence-cservenyak.com/']
  githubLinks = ['https://github.com/Hummner/join-448', 'https://github.com/Hummner/sharkie', '/work-in-progress', 'https://github.com/Hummner/Pokodex']
  private aosInitialized = false;

  constructor(private translate: TranslateService) {
    translate.addLangs(['de', 'en']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

   ngAfterViewInit() {
    AOS.init({ duration: 1000, once: true });
    this.aosInitialized = true;
  }

  ngAfterViewChecked() {
    if (this.aosInitialized) {
      AOS.refresh(); // zwingt AOS, neu generierte DOM-Elemente zu erkennen
    }
  }
}
