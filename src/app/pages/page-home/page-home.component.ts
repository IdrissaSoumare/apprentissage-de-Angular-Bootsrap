import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';
import { map } from 'rxjs';

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
      // console.log(data);
      this.plantsToDisplay = [...data];
      const result = this.getCategoriesFromPlants(data);
      this.categoriesToSend = this.getCategoriesFromPlants(data);

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
  filterPlantsByCategories(categories: string[]) {
    //mise en place du filtre des plantes en fonction de leur categorie
    this.plantsToDisplay = this.plantsToDisplay.filter(x => categories.includes(x.categorie));


    console.log(categories);
  }

  //retorner un tableau qui contient des palantes de maniere unique
  //.map()
  //set =>supprime les doublons
  // transformer le set en tableau
  //
}


