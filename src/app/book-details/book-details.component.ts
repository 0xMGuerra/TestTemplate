import { Component } from '@angular/core';
import {AuthorDetailsComponent} from "../author-details/author-details.component";

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [
    AuthorDetailsComponent
  ],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {

}
