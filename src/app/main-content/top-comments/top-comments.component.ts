import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-comments.component.html',
  styleUrl: './top-comments.component.scss'
})
export class TopCommentsComponent {

  comments = [
    {
      text: "Bence really kept the team together with his great organization and clear communication. We wouldn\'t have got this far without his commitment.",
      name: "V. Schuster - Team Partner"
    },
    {
      text: "Michi was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.",
      name: "E.Eichinger - Team Partner"
    },
    {
      text: "It was a great pleasure to work with Michael. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well.",
      name: "I.Nuber - Frontend Engineer"
    }

  ]

  currentComment = 0;

  nextComment() {
    this.currentComment = (this.currentComment + 1) % 3;
  }

  lastComment() {
    this.currentComment = (this.currentComment - 1 + 3) % 3;
  }

}
