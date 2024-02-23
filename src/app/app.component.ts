import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'
import { NavbarComponent } from "./navbar/navbar.component";
import {AuthorDetailsComponent} from "./author-details/author-details.component";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {CategoryComponent} from "./category/category.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, AuthorDetailsComponent, BookDetailsComponent, CategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TestTemplate';
}
