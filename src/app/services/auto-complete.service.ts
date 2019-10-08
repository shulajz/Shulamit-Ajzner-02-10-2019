import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutoCompleteService {

  constructor(private http: HttpClient) {
    this.autoCompleteUrl = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=' + this.apiKey +
      '&q=';
  }

  autoCompleteUrl: string;
  apiKey = 'G25DGfAiQWANcDJXD8b8LhpqsksMFVXG';

  async getAutoCompletedDaysOptions(letters) {
    // if (letters === null) {
    //   const obj: any = await this.http.get(this.autoCompleteUrl + letters + '&language=en-us').toPromise();
    //   const arrOfAutoCompletedCities = [];
    //   for (let i = 0; i < Object.keys(obj).length; i++) {
    //     arrOfAutoCompletedCities.push(obj[i].LocalizedName);
    //   }
    //   return arrOfAutoCompletedCities;
    // }

  }
}

