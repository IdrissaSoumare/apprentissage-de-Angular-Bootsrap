import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant } from '../models/plant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {
  // on injectera cette dependance dans tous les services
  constructor(private http: HttpClient) { }

  getPlants(): Observable<Plant[]> {//renvoie un observable de type Plant et cette mention est facultative
    //requete http de type get qui sera de type plant et cette requete
    //est faite sur cette url
    return this.http.get<Plant[]>('http://localhost:3000/plants');
  }
}
