import { Component } from '@angular/core';
import { WorksComponent } from "./works/works.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [WorksComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
