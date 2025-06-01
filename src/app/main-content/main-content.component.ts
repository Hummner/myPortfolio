import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
