import { Component } from '@angular/core';

@Component({
  selector: 'app-author-details',
  standalone: true,
  imports: [],
  templateUrl: './author-details.component.html',
  styleUrl: './author-details.component.css'
})
export class AuthorDetailsComponent {
  isExpanded: boolean = false;
  biographytext: string = "Desde el siglo xviii está admitido que el lugar de nacimiento de Miguel de Cervantes fue Alcalá de Henares,4​ dado que allí fue bautizado, según su acta bautismal, y que de allí aclaró ser natural en la llamada Información de Argel (1580).7​ El día exacto de su nacimiento es menos seguro, aunque lo normal es que naciera el 29 de septiembre, fecha en que se celebra la fiesta del arcángel San Miguel, dada la tradición de recibir el nombre del santoral del día del nacimiento. Miguel de Cervantes fue bautizado el 9 de octubre de 1547 en la parroquia de Santa María la Mayor.8​9​ El acta del bautizo reza:\n" +
    "\n" +
    "Domingo, nueve días del mes de octubre, año del Señor de mill e quinientos e quarenta e siete años, fue baptizado Miguel, hijo de Rodrigo Cervantes e su mujer doña Leonor. Baptizóle el reverendo señor Bartolomé Serrano, cura de Nuestra Señora. Testigos, Baltasar Vázquez, Sacristán, e yo, que le bapticé e firme de mi nombre. Bachiller Serrano.10​\n" +
    "El padre del escritor era Rodrigo de Cervantes (1509-1585), casado con Leonor de Cortinas, de la cual apenas se sabe nada, excepto que era natural de Arganda del Rey.11​ Los hermanos de Cervantes fueron Andrés (1543), Andrea (1544), Luisa (1546), que llegó a ser priora de un convento carmelita; Rodrigo (1550), también soldado, que le acompañó en el cautiverio argelino; Magdalena (1554) y Juan, solo conocido porque su padre lo menciona en el testamento.\n" +
    "\n" +
    "El apellido Saavedra, en opinión de la historiadora Luce López-Baralt, y que el autor comenzó a utilizar tras su cautiverio, viene de «shaibedraa», que en dialecto árabe magrebí se pronuncia casi como en español y significa «brazo tullido o estropeado», por lo que Cervantes en Argel pudo ser llamado «shaibedraa», a saber, «manco». Es además un apellido corriente en Argelia desde hace siglos.12​ Por el contrario, la hispanista María Antonia Garcés atribuye la adopción del apellido gallego Saavedra a la reinvención que Cervantes hace de sí mismo al retorno de la esclavitud; es nombre que él mismo otorga al héroe de su drama El trato de Argel, y a los protagonistas de su El gallardo español y de La historia del cautivo (capítulos 39—41 de Don Quijote); ha sido Gonzalo Cervantes Saavedra un lejano pariente, también veterano de Lepanto y escritor, y cuya vida tuvo singulares paralelismos con la suya; además, la prominente familia Saavedra (o Sayavedra) de Sevilla, quienes pelearon contra los moros por cientos de años en la frontera, podría haberle resultado emblemática a Cervantes, quien pudo verse a sí mismo como el descendiente moral de Juan de Sayavedra, héroe medieval celebrado en romances de gesta y también apresado por los moros.13​\n" +
    "\n" +
    "Según Américo Castro, Daniel Eisenberg y otros cervantistas, Cervantes poseía ascendencia conversa por ambas líneas familiares; su padre era cirujano, su abuelo, abogado y su bisabuelo, trapero. Por el contrario, su último biógrafo, Jean Canavaggio, afirma que dicha ascendencia no está probada, en comparación con los documentos que apoyan esta ascendencia sin lugar a dudas para Mateo Alemán; en todo caso, la familia Cervantes estaba muy bien considerada en Córdoba y ostentaba allí y en sus cercanías cargos importantes."
  biographyThogle: string = this.biographytext.slice(0, 1000) + "...";
  buttonText: string = 'Leer más >';

  toggleText() {
    this.isExpanded = !this.isExpanded;
    this.buttonText = this.isExpanded ? 'Leer menos >' : 'Leer más >'
    this.biographyThogle = this.isExpanded ?  this.biographytext : this.biographytext.slice(0, 1000) + "..."

  }
}
