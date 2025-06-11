import { CommonModule } from '@angular/common';
import { AfterViewChecked, AfterViewInit, Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import AOS from 'aos';

@Component({
  selector: 'app-top-comments',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './top-comments.component.html',
  styleUrl: './top-comments.component.scss'
})
export class TopCommentsComponent implements AfterViewInit, AfterViewChecked {
  private aosInitialized = false;
  currentComment = 0;
  comments = [
    { key: 'comment1' },
    { key: 'comment2' },
    { key: 'comment3' }
  ];

  nextComment() {
    this.currentComment = (this.currentComment + 1) % this.comments.length;
  }


  lastComment() {
    this.currentComment = (this.currentComment - 1 + this.comments.length) % this.comments.length;
  }


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
