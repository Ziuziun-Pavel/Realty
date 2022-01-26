import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';

import { AdsComponent } from './components/advertisement/advertisement.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { NewsComponent } from './components/news/news.component';
import { SellCardComponent } from './components/advertisement/sell-card/sell-card.component';
import { NewsCardComponent } from './components/news/news-card/news-card.component';
import { HomeComponent } from './home.component';
import { CardComponent } from './components/advertisement/card/card.component';
import { RentCardsComponent } from './components/advertisement/rent-cards/rent-cards.component';
import { NewsListComponent } from './components/news/news-list/news-list.component';
import { FlatPageComponent } from './components/advertisement/flat-page/flat-page.component';
import { NewsPageComponent } from './components/news/news-page/news-page.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [
    AdsComponent,
    SearchPanelComponent,
    NewsComponent,
    SellCardComponent,
    NewsCardComponent,
    HomeComponent,
    CardComponent,
    RentCardsComponent,
    NewsListComponent,
    FlatPageComponent,
    NewsPageComponent,
  ],
  exports: [HomeComponent],
})

export class HomeModule { }
