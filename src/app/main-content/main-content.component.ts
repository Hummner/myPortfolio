import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeroComponent, AboutMeComponent, SkillsComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
