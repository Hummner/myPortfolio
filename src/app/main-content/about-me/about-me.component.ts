import { AfterViewInit, Component, AfterViewChecked } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import AOS from 'aos';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements AfterViewInit, AfterViewChecked {
  currentLang = "";
  private aosInitialized = false;


  ngAfterViewInit() {
    AOS.init({ duration: 125, once: true });
    this.aosInitialized = true;
  }


  ngAfterViewChecked() {
    if (this.aosInitialized) {
      AOS.refresh();
    }
  }
}
