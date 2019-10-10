import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DayWeather} from '../models/dayWeather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
    this.fiveDayForcastUrl = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
    this.citySearchUrl = 'https://dataservice.accuweather.com/locations/v1/cities/search?apikey=';
    this.currentTempUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
  }

  apiKey = 'G25DGfAiQWANcDJXD8b8LhpqsksMFVXG';
  fiveDayForcastUrl: string;
  citySearchUrl: string;
  currentTempUrl: string;

  // assuming to retrieve the first city in the list
  async getCityApiKey(cityName) {
    if (cityName.includes(' ')) {
      const newCityName = cityName.split( ' ');
      cityName = newCityName[0] + '%20' + newCityName[1];
    }
    try {
      const res = await this.http.get(
        this.citySearchUrl +
        this.apiKey +
        '&q=' +
        cityName +
        '&language=en-us&details=false').toPromise();
      if (!res[0]) {
        return null;
      }
      return res[0].Key;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async getCurrentTemp(IDcity) {
    try {
    const currentTemp = await this.http.get(this.currentTempUrl +
      IDcity +
      '?apikey=' +
      this.apiKey +
      '&language=en-us&details=false').toPromise();
    return currentTemp[0].WeatherText;
    } catch (err) {
      console.log(err);
    }
  }

  async getFiveDaysForecast(IDcity, cityName) {
    try {
      const fiveDayForecastResult: any = await this.http.get(this.fiveDayForcastUrl +
        IDcity +
        '?apikey=' +
        this.apiKey +
        '&language=en-us&details=false&metric=false').toPromise();
      const arrOfDayWeather: DayWeather[] = [];
      for (const DailyForecast of fiveDayForecastResult.DailyForecasts) {
        const arrOfOneDate = DailyForecast.Date.slice(0, 10).split('-');
        const day = new Date(+arrOfOneDate[0], +arrOfOneDate[1] - 1, +arrOfOneDate[2]).getDay();
        const listOfDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        // convert to celsius
        const celci = (DailyForecast.Temperature.Maximum.Value - 32) * (5 / 9);
        arrOfDayWeather.push({day: listOfDays[day], temp: Math.round(celci), iconPhrase: DailyForecast.Day.IconPhrase, cityName});
      }
      return arrOfDayWeather;
    } catch (err) {
      console.log(err);
    }
  }
}
