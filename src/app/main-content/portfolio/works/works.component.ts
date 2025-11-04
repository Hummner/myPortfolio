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
  projectKeys = ['join', 'sharkie', 'dabubble'];
  projectLinks = ['http://join.bence-cservenyak.com', 'http://sharkie.bence-cservenyak.com', 'noLink']
  githubLinks = ['https://github.com/Hummner/join-448', 'https://github.com/Hummner/sharkie', 'https://github.com/Hummner/DABubble']
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
