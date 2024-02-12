
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'
import { NavbarComponent } from "./navbar/navbar.component";
import {CarritoComponent} from "./carrito/carrito.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CarritoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TestTemplate';
}
