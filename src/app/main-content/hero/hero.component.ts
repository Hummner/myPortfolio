import { CommonModule } from '@angular/common';
import { AfterViewChecked, AfterViewInit, Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import AOS from 'aos';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit, AfterViewChecked {
  private aosInitialized = false;

  ngAfterViewInit() {
    AOS.init({ duration: 1000, once: true });
    this.aosInitialized = true;
  }

  ngAfterViewChecked() {
    if (this.aosInitialized) {
      AOS.refresh();
    }
  }
}
