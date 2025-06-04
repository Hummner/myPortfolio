import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export class WorksComponent {
  images = ["laptop_0"];
  project = [
    {
      title: "Join",
      subtitle : "JavaScript | CSS | HTML",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. "
    },
    {
      title: "Sharkie",
      subtitle : "JavaScript | CSS | HTML",
      description: "A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale. "
    },
    {
      title: "Simple CRM",
      subtitle : "Angular | Firebase",
      description: "A very Simple Customer Relationship Management system working with CRUD functionality. "
    },
    {
      title: "Pokédex",
      subtitle : "JavaScript | HTML | CSS | Api",
      description: "Based on the PokéAPI a simple library that provides and catalogues pokemon information."
    },

  ]


}
