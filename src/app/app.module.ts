import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './components/main/main.component';
import {FavoritesComponent} from './components/favorites/favorites.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {RouterModule} from '@angular/router';
import {WeatherService} from './services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule, MatInputModule, MatAutocompleteModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';

const appRoutes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'favorites', component: FavoritesComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FavoritesComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
