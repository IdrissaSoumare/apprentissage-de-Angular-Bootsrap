import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-one-plants',
  templateUrl: './search-one-plants.component.html',
  styleUrls: ['./search-one-plants.component.css']
})
export class SearchOnePlantsComponent {
  values = '';
  CheckedOnePLant: string[] = [];
  @Output() categoriesToFilter = new EventEmitter<string>();



  onKey(event: Event) {
    const target = event.target as HTMLInputElement;
    //dans le HTMLInputElement, on a des léments de type string
    this.categoriesToFilter.emit(target.value)
  }

}
