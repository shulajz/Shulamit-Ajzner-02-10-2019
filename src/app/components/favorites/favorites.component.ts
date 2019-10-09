import { Component, OnInit } from '@angular/core';
import {FavoritesService} from '../../services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private favoritesService: FavoritesService) { }
  public arrOfFavorites: Location[] = [];
  ngOnInit() {
    this.arrOfFavorites = this.favoritesService.getFavorites();
    console.log('the arrrrr is = ' + this.arrOfFavorites);
  }

}
