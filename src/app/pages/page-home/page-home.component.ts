import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {
  divDisplayed = false;
  testAffichage = 'hello';
  monTitle = 'test de titre';
  plantsToDisplay: Plant[] = [];
  categoriesToSend: string[] = [];
  tableauPlas!: Plant[];
  projetPLant: string = "";
  filtersPlant!: string[];



  constructor(private plantsService: PlantsService) {
    //this=>getPlants(), c'est le fetch en js
    //le .subscribe, c'est le then en js

    /*fetch('http://localhost:3000/plants').then((resp) => {
      return resp.json()
    }).then((data) => {
      console.log(data);
    }) la même syntaxe mais en js*/

  }
  ngOnInit(): void {
    this.plantsService.getPlants().subscribe((data) => {
      console.log(data);
      this.plantsToDisplay = [...data];

      this.categoriesToSend = this.getCategoriesFromPlants(data);
      this.tableauPlas = [...data];
      this.filtersPlant = [...this.categoriesToSend]

    });
  }

  getCategoriesFromPlants(plants: Plant[]): string[] {
    //trier les 6 categories
    const plantsToDisplay = plants;
    const withoutDoublons = new Set(plants.map(x => x.categorie))
    //transformer le set en tableau
    const sansDoublons = [...withoutDoublons]
    console.log(sansDoublons)
    return sansDoublons;
  }
  //appelé quand l'utilisateur change les categories choisies
  filterPlantsByCategories(categories: string[]) {
    this.filtersPlant = categories;
    this.onUpdate();
  }

  //retorner un tableau qui contient des palantes de maniere unique
  //.map()
  //set =>supprime les doublons
  // transformer le set en tableau
  //
  onRecupere(plants: string) {
    console.log(this.plantsToDisplay);
    console.log(plants);
    this.projetPLant = plants;
    this.onUpdate();
  }

  onUpdate() {
    this.plantsToDisplay = [...this.tableauPlas];
    this.plantsToDisplay = this.plantsToDisplay.filter(x => this.filtersPlant.includes(x.categorie));
    //en partant du tableau de base, je conserve les plantes dont la categorie est incluse dans le tableau 'filtersplants'=>qui contient les categories choisies par l'utilisateur
    console.log(this.filtersPlant);

    this.plantsToDisplay = this.plantsToDisplay.filter(x => x.nom.toLowerCase().includes(this.projetPLant.toLowerCase()));

  }


}
