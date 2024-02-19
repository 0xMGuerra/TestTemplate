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
  isExpanded: boolean = false;
  sinopsistext: string = "Bajo la misma estrella es la novela que ha catapultado a John  Green al éxito. Una historia que explora cuán exquisita y trágica puede ser la aventura de saberse vivo y querer a alguien.\n" +
    "\n" +
    "Emotiva, irónica y afilada. Una novela teñida de humor y de tragedia que  habla de nuestra capacidad para soñar incluso en las circunstancias más difíciles.\n" +
    "\n" +
    "A Hazel y a Gus les gustaría tener vidas más corrientes. Algunos dirían  que no han nacido con estrella, que su mundo es injusto. Hazel y Gus son  solo adolescentes, pero si algo les ha enseñado el cáncer que ambos  padecen es que no hay tiempo para lamentaciones, porque, nos guste o no,  solo existe el hoy y el ahora. Y por ello, con la intención de hacer  realidad el mayor deseo de Hazel -conocer a su escritor favorito-,  cruzarán juntos el Atlántico para vivir una aventura contrarreloj, tan  catártica como desgarradora. Destino: Amsterdam, el lugar donde reside  el enigmático y malhumorado escritor, la única persona que tal vez pueda  ayudarles a ordenar las piezas del enorme puzle del que forman parte...\n" +
    "\n" +
    "Mejor libro del año segúnTime yEntretaintment Weekly.\n" +
    "Más de 7 millones de ejemplares vendidos en el mundo.\n" +
    "Número 1 en las listas debest sellers durante meses.\n" +
    "\n" +
    "La crítica ha dicho...\n" +
    "«Una novela sobre la vida y la muerte, y sobre los que están atrapados  entre las dos... Reirás, llorarás y te quedarás con ganas de  más.»\n" +
    "Markus Zusak, autor deLa ladrona de libros\n" +
    "\n" +
    "«Una novela imposible de olvidar, para jóvenes y no tan jóvenes.»\n" +
    "USA Today\n" +
    "\n" +
    "«Absolutamente genial. [...] Un ejemplo perfecto de por qué los adultos leen novelas juveniles.»\n" +
    "Time\n" +
    "\n" +
    "«Esta novela es un triunfo.»\n" +
    "Booklist\n" +
    "\n" +
    "«Divertida... Conmovedora... Luminosa.»\n" +
    "Entretaintment Weekly\n" +
    "\n" +
    "«Una mezcla de melancolía, dulzura, filosofía y humor.»\n" +
    "New York Times\n" +
    "\n" +
    "«John Green aúna lo profundo y lo cotidiano en esta desgarradora novela.»\n" +
    "Washington Post\n" +
    "\n" +
    "«Una historia dolorosamente bella sobre la vida y las pérdidas.»\n" +
    "School Library Journal"
  sinopsisThogle: string = this.sinopsistext.slice(0, 500) + "...";
  buttonText: string = 'Leer más >';

  toggleText() {
    this.isExpanded = !this.isExpanded;
    this.buttonText = this.isExpanded ? 'Leer menos >' : 'Leer más >'
    this.sinopsisThogle = this.isExpanded ?  this.sinopsistext : this.sinopsistext.slice(0, 500) + "..."

  }
}
