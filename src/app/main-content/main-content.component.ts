import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { TopCommentsComponent } from "./top-comments/top-comments.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeroComponent, AboutMeComponent, SkillsComponent, PortfolioComponent, TopCommentsComponent, ContactComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
