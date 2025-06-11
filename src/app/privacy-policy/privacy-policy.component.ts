import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  sectionKeys = [
    'general',
    'controller',
    'dataCollection',
    'logfiles',
    'cookies',
    'rights',
    'form',
    'ssl',
    'changes'
  ];
}
