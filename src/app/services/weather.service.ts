import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WeekDay} from '@angular/common';
import {DayWeather} from '../models/dayWeather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
    this.fiveDayForcastUrl = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
    this.citySearchUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search?apikey=';
    this.currentTempUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
  }

  apiKey = 'G25DGfAiQWANcDJXD8b8LhpqsksMFVXG';
  fiveDayForcastUrl: string;
  citySearchUrl: string;
  currentTempUrl: string;

  async getCityApiKey(cityName) {
    const res = await this.http.get(
      this.citySearchUrl +
      this.apiKey +
      '&q=' +
      cityName +
      '&language=en-us&details=false').toPromise();
    if (!res[0]) {
      return null;
    }
    console.log(res[0].Key);
    return res[0].Key;
  }

  async getCurrentTemp(IDcity) {
    // const currentTemp = await this.http.get(this.currentTempUrl +
    //   IDcity +
    //   '?apikey=' +
    //   this.apiKey +
    //   '&language=en-us&details=false').toPromise();
    // return currentTemp[0].WeatherText;
  }

  async getFiveDaysForecast(IDcity, cityName) {
    // const obj: any = await this.http.get(this.fiveDayForcastUrl + IDcity +
    //   '?apikey=' + this.apiKey + '&language=en-us&details=false&metric=false').toPromise();
    // console.log(obj.DailyForecasts[0].Date);
    const obj = {
      Headline: {
        EffectiveDate: '2019-10-03T20:00:00+01:00',
        EffectiveEpochDate: 1570129200,
        Severity: 1,
        Text: 'Tropical Rainstorm Lorenzo will affect the area Thursday evening',
        Category: 'tropical',
        EndDate: '2019-10-04T02:00:00+01:00',
        EndEpochDate: 1570150800,
        MobileLink: 'http://m.accuweather.com/en/gb/london/ec4a-2/extended-weather-forecast/328328?lang=en-us',
        Link: 'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?lang=en-us'
      },
      DailyForecasts: [
        {
          Date: '2019-10-03T07:00:00+01:00',
          EpochDate: 1570082400,
          Temperature: {
            Minimum: {
              Value: 52,
              Unit: 'F',
              UnitType: 18
            },
            Maximum: {
              Value: 57,
              Unit: 'F',
              UnitType: 18
            }
          },
          Day: {
            Icon: 3,
            IconPhrase: 'Partly sunny',
            HasPrecipitation: false
          },
          Night: {
            Icon: 12,
            IconPhrase: 'Showers',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Light'
          },
          Sources: [
            'AccuWeather'
          ],
          MobileLink: 'http://m.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=1&lang=en-us',
          Link: 'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=1&lang=en-us'
        },
        {
          Date: '2019-10-04T07:00:00+01:00',
          EpochDate: 1570168800,
          Temperature: {
            Minimum: {
              Value: 50,
              Unit: 'F',
              UnitType: 18
            },
            Maximum: {
              Value: 59,
              Unit: 'F',
              UnitType: 18
            }
          },
          Day: {
            Icon: 18,
            IconPhrase: 'Rain',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Light'
          },
          Night: {
            Icon: 12,
            IconPhrase: 'Showers',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Light'
          },
          Sources: [
            'AccuWeather'
          ],
          MobileLink: 'http://m.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=2&lang=en-us',
          Link: 'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=2&lang=en-us'
        },
        {
          Date: '2019-10-05T07:00:00+01:00',
          EpochDate: 1570255200,
          Temperature: {
            Minimum: {
              Value: 52,
              Unit: 'F',
              UnitType: 18
            },
            Maximum: {
              Value: 60,
              Unit: 'F',
              UnitType: 18
            }
          },
          Day: {
            Icon: 6,
            IconPhrase: 'Mostly cloudy',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Light'
          },
          Night: {
            Icon: 40,
            IconPhrase: 'Mostly cloudy w/ showers',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Light'
          },
          Sources: [
            'AccuWeather'
          ],
          MobileLink: 'http://m.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=3&lang=en-us',
          Link: 'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=3&lang=en-us'
        },
        {
          Date: '2019-10-06T07:00:00+01:00',
          EpochDate: 1570341600,
          Temperature: {
            Minimum: {
              Value: 49,
              Unit: 'F',
              UnitType: 18
            },
            Maximum: {
              Value: 58,
              Unit: 'F',
              UnitType: 18
            }
          },
          Day: {
            Icon: 18,
            IconPhrase: 'Rain',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Light'
          },
          Night: {
            Icon: 36,
            IconPhrase: 'Intermittent clouds',
            HasPrecipitation: false
          },
          Sources: [
            'AccuWeather'
          ],
          MobileLink: 'http://m.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=4&lang=en-us',
          Link: 'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=4&lang=en-us'
        },
        {
          Date: '2019-10-07T07:00:00+01:00',
          EpochDate: 1570428000,
          Temperature: {
            Minimum: {
              Value: 55,
              Unit: 'F',
              UnitType: 18
            },
            Maximum: {
              Value: 59,
              Unit: 'F',
              UnitType: 18
            }
          },
          Day: {
            Icon: 4,
            IconPhrase: 'Intermittent clouds',
            HasPrecipitation: false
          },
          Night: {
            Icon: 18,
            IconPhrase: 'Rain',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Light'
          },
          Sources: [
            'AccuWeather'
          ],
          MobileLink: 'http://m.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=5&lang=en-us',
          Link: 'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=5&lang=en-us'
        }
      ]
    };
    console.log('hi1');
    // const arrOfDates = [];
    const arrOfDayAndTemp: DayWeather[] = [];
    for (const DailyForecast of obj.DailyForecasts) {
      // arrOfDates.push(DailyForecast.Date);
      const arrOfOneDate = DailyForecast.Date.slice(0, 10).split('-');
      const day = new Date(+arrOfOneDate[0], +arrOfOneDate[1] - 1, +arrOfOneDate[2]).getDay();
      const listOfDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      // const averageOfTemp = (DailyForecast.Temperature.Minimum.Value + DailyForecast.Temperature.Maximum.Value) / 2;
      const celci = (DailyForecast.Temperature.Maximum.Value - 32) * (5 / 9);
      arrOfDayAndTemp.push({day: listOfDays[day], temp: Math.round(celci), iconPhrase: DailyForecast.Day.IconPhrase, cityName});
    }
    console.log(arrOfDayAndTemp);

    return arrOfDayAndTemp;
  }
}
