import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import {DayWeather} from '../../models/dayWeather';
import {FavoritesService} from '../../services/favorites.service';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { map } from 'rxjs/operators';
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
  filteredOptions: Observable<Promise<void>>;
  arrOfDayAndTemp: DayWeather[];
  options: any;
  cityName: any;
  currentTemp: any;
  favoriteExists: boolean;
  async ngOnInit() {
    this.cityName = sessionStorage.getItem('cityName');
    if (this.cityName === null) {
      this.cityName = 'tel aviv';
    }
    sessionStorage.setItem('cityName', this.cityName);
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        map(value => this._filter(value))
      );
    // localStorage.clear();
    this.favoriteExists = this.favoritesService.getBooleanOfFavoriteExists();
    // const IDcity = await this.weatherService.getCityApiKey(this.cityName);
    // this.currentTemp = await this.weatherService.getCurrentTemp(328328);
    // this.arrOfDayAndTemp = await this.weatherService.getFiveDaysForecast(IDcity, this.cityName);
    this.arrOfDayAndTemp = await this.weatherService.getFiveDaysForecast(328328, this.cityName);


  }
  async _filter(value: string) {
    this.options =  await this.autoCompleteService.getAutoCompletedDaysOptions(value);
  }

  async search() {
    sessionStorage.setItem('cityName', this.cityName);
    // const IDcity = await this.weatherService.getCityApiKey(this.cityName);
    // if (IDcity === null) {
    //   alert('oops! no such city. try again:)');
    //   return;
    // }
    // this.arrOfDayAndTemp = await this.weatherService.getFiveDaysForecast(IDcity, this.cityName);
    this.currentTemp = await this.weatherService.getCurrentTemp(328328);
    this.arrOfDayAndTemp = await this.weatherService.getFiveDaysForecast(328328, this.cityName);
  }

  addToFavorites(cityName) {
    const favoriteExists = this.favoritesService.getBooleanOfFavoriteExists();
    if (favoriteExists === true) {
      this.favoritesService.removeFromFavorites(cityName);
    } else {
      const LocationToSet = {
        ID: this.rand(),
        nameOfCity: cityName,
        currentTemp: this.arrOfDayAndTemp[0].temp,
        iconPhrase: this.arrOfDayAndTemp[0].iconPhrase
      };
      this.favoritesService.addToFavorites(LocationToSet);
    }
    this.favoriteExists = !this.favoriteExists;
  }

  rand() {
    return Math.random().toString(36).substr(2); // remove `0.`
  }

  displayFunc(subject) {
    return subject ? subject : undefined;
  }
}
