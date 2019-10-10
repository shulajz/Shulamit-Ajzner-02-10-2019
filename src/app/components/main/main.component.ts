import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import {DayWeather} from '../../models/dayWeather';
import {FavoritesService} from '../../services/favorites.service';
import { Observable } from 'rxjs';
import {FormControl} from '@angular/forms';
import {AutoCompleteService} from '../../services/auto-complete.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private weatherService: WeatherService, private favoritesService: FavoritesService,
              private autoCompleteService: AutoCompleteService) {
  }
  myControl: FormControl = new FormControl();
  filteredOptions: Observable<string[]>;
  arrOfDayAndTemp: DayWeather[];
  cityName: any;
  currentTemp: any;
  favoriteExists: boolean;
  static rand() {
    return Math.random().toString(36).substr(2); // remove `0.`
  }
  async ngOnInit() {
    this.cityName = sessionStorage.getItem('cityName');
    if (this.cityName === null) {
      this.cityName = 'tel aviv';
    }
    sessionStorage.setItem('cityName', this.cityName);
    this.favoriteExists = this.favoritesService.getBooleanOfFavoriteExists();
    const IDcity = await this.weatherService.getCityApiKey(this.cityName);
    await this.getForecast(IDcity);
  }
  async search() {
    sessionStorage.setItem('cityName', this.cityName);
    const IDcity = await this.weatherService.getCityApiKey(this.cityName);
    if (IDcity === null) {
      alert('oops! no such city. try again:)');
      return;
    }
    await this.getForecast(IDcity);
  }
  async getForecast(IDcity) {
    this.arrOfDayAndTemp = await this.weatherService.getFiveDaysForecast(IDcity, this.cityName);
    this.currentTemp = await this.weatherService.getCurrentTemp(IDcity);
  }

  addToFavorites(cityName) {
    const favoriteExists = this.favoritesService.getBooleanOfFavoriteExists();
    if (favoriteExists === true) {
      this.favoritesService.removeFromFavorites(cityName);
    } else {
      const LocationToSet = {
        ID: MainComponent.rand(),
        nameOfCity: cityName,
        currentTemp: this.arrOfDayAndTemp[0].temp,
        iconPhrase: this.arrOfDayAndTemp[0].iconPhrase
      };
      this.favoritesService.addToFavorites(LocationToSet);
    }
    this.favoriteExists = !this.favoriteExists;
  }
}
