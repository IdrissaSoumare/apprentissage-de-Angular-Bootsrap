import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOnePlantsComponent } from './search-one-plants.component';

describe('SearchOnePlantsComponent', () => {
  let component: SearchOnePlantsComponent;
  let fixture: ComponentFixture<SearchOnePlantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchOnePlantsComponent]
    });
    fixture = TestBed.createComponent(SearchOnePlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
