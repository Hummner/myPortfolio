import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export class WorksComponent {
  images = ["laptop_1"];
  text = [
    {
      title: "Join",
      subtitle : "JavaScript | CSS | HTML",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. "
    }
  ]


}
