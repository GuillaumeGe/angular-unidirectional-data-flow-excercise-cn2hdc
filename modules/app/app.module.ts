import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppContainer } from './containers/app/app.container';
import { CarOverviewContainer } from './containers/car-overview/car-overview.container';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarListItemComponent } from './components/car-list/car-list-item.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppContainer,
    CarOverviewContainer,
    CarListComponent,
    CarListItemComponent
  ],
  exports: [],
  providers: [],
  bootstrap: [AppContainer]
})
export class AppModule {}