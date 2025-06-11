import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, Output, EventEmitter, AfterViewChecked } from '@angular/core';
import { FormsModule, NgForm, NgModel, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NoLeadingWhitespaceDirective } from './no-leading-whitespace.directive';
import { AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import AOS from 'aos';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule, RouterModule, NoLeadingWhitespaceDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit, AfterViewChecked {
  sentEmailUserFeddback: boolean = false;
  isChecked: boolean = false;
  sentEmail: boolean = false;
  trySubmit: boolean = false;
  http = inject(HttpClient);
  mailTest = false;
  private aosInitialized = false;

  contactData = {
    name: "",
    email: "",
    message: ""
  };

  post = {
    endPoint: '/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  constructor(private translate: TranslateService) {
    translate.addLangs(['de', 'en']);
    translate.setDefaultLang('en');
    translate.use('en');
  };


  switchLanguage() {
    const newLang = this.translate.currentLang === 'de' ? 'en' : 'de';
    this.translate.use(newLang);
  };


  onSubmit(ngForm: NgForm) {
    this.trySubmit = true;
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {


            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            this.sentEmail = true
          },
        });
      this.trySubmit = false;

    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
      console.log("Sent mail");
      this.sentEmail = true;
      this.trySubmit = false;
    }
  };


  newEmail() {
    this.sentEmail = false;
    this.trySubmit = false;
  };

  @ViewChild('nameInput') nameInputRef!: ElementRef<HTMLInputElement>;
  private hashChangeListener = () => { };

  ngAfterViewInit() {
    this.checkHashAndFocus();

    this.hashChangeListener = () => this.checkHashAndFocus();
    window.addEventListener('hashchange', this.hashChangeListener);
    AOS.init({ duration: 1000, once: true });
    this.aosInitialized = true;
  }

  ngOnDestroy() {
    window.removeEventListener('hashchange', this.hashChangeListener);
  }

  private checkHashAndFocus() {
    if (window.location.hash === '#contact') {
      setTimeout(() => {
        this.nameInputRef?.nativeElement.focus();
      }, 300);
    }
  }



  ngAfterViewChecked() {
    if (this.aosInitialized) {
      AOS.refresh(); // zwingt AOS, neu generierte DOM-Elemente zu erkennen
    }
  }
}
