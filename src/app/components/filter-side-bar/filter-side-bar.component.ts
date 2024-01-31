import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-side-bar',
  templateUrl: './filter-side-bar.component.html',
  styleUrls: ['./filter-side-bar.component.css']
})
export class FilterSideBarComponent {
  @Input() categoriesToDisplay!: string[];
  CheckedCategories: string[] = [];
  @Output() categoriesToFilter = new EventEmitter<string[]>();

  onCheckedCategories(event: Event) {
    const target = event.target as HTMLInputElement;

    //ajouter la selection à un tableau
    if (target.checked) {
      //on vide le tableau
      if (this.CheckedCategories.length === this.categoriesToDisplay.length) {
        this.CheckedCategories = [];
      }
      this.CheckedCategories.push(target.value);

      //retirer du tableau ce qui est décoché
    } else {
      this.CheckedCategories = this.CheckedCategories.filter((categorie) => categorie !== target.value);
      //si rien est coché, on affiche toutes les catégories
      if (this.CheckedCategories.length === 0) {
        this.CheckedCategories = [...this.categoriesToDisplay];
      }

    }
    this.categoriesToFilter.emit(this.CheckedCategories);

    // CheckedCategories.push(target.value);

    /**
     * Lorsqu'un user coche une checkbox
     * -> On l'ajoute à une tableau de catégorie cochée
     
     * Et que c'est la première coche après avoir tout décoché
     * -> On doit d'abord vider notre tableau
     * 
     * Lorsqu'un user décoche une checkbox
     * -> On la retire du tableau de catégorie cochée
     * 
     * Lorqu'aucune catégorie n'est coché 
     * -> On met toute les catégorie par défaut
     * 
     */
  }

}
