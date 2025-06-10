import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-top-comments',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './top-comments.component.html',
  styleUrl: './top-comments.component.scss'
})
export class TopCommentsComponent {

  currentComment = 0;

  comments = [
    { key: 'comment1' },
    { key: 'comment2' },
    { key: 'comment3' }
  ];

  constructor(private translate: TranslateService) {
    translate.addLangs(['de', 'en']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  switchLanguage() {
    const newLang = this.translate.currentLang === 'de' ? 'en' : 'de';
    this.translate.use(newLang);
  }


  nextComment() {
    this.currentComment = (this.currentComment + 1) % this.comments.length;
  }

  lastComment() {
    this.currentComment = (this.currentComment - 1 + this.comments.length) % this.comments.length;
  }
}
