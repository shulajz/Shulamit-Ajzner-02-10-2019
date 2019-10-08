import { Component } from '@angular/core';
import {FavoritesService} from './services/favorites.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shulamit-Ajzner';
  constructor(private favoritesService: FavoritesService) {
    this.favoritesService.initBooleanOfFavoriteExists();
  }

}



