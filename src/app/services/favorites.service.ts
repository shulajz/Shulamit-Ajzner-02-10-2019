import { Injectable } from '@angular/core';
import {DayWeather} from '../models/dayWeather';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor() { }
  private arrOfFavorites: Location[] = [];
  favoriteExists = false;


  addToFavorites(Location) {
    let arrOfFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (!arrOfFavorites) {
       arrOfFavorites = this.arrOfFavorites;
    }
    arrOfFavorites.push(Location);
    localStorage.setItem('favorites', JSON.stringify(arrOfFavorites));
    this.updateBooleanOfFavoriteExists();
  }

  removeFromFavorites(cityName) {
    const arrOfFavorites = JSON.parse(localStorage.getItem('favorites'));
    const filteredArray = arrOfFavorites.filter(item => !(item.nameOfCity === cityName));
    // filteredArray.pop(Location);
    localStorage.setItem('favorites', JSON.stringify(filteredArray));
    this.updateBooleanOfFavoriteExists();

  }

  getFavorites() {
    const arrOfFavorites = JSON.parse(localStorage.getItem('favorites'));
    return arrOfFavorites;
  }

  initBooleanOfFavoriteExists() {
    localStorage.setItem('favoriteExists', JSON.stringify(this.favoriteExists));
  }
  updateBooleanOfFavoriteExists() {
    this.favoriteExists = !this.favoriteExists;
    localStorage.setItem('favoriteExists', JSON.stringify(this.favoriteExists));
  }
  getBooleanOfFavoriteExists() {
    return JSON.parse(localStorage.getItem('favoriteExists'));
  }

}
