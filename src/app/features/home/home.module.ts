import { NgModule } from "@angular/core";
import { CommonModule} from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { HomeRoutingModule } from "./home-routing.module";

import { AdsComponent } from "./components/advertisement/advertisement.component";
import { SearchPanelComponent } from "./components/search-panel/search-panel.component";
import { NewsComponent } from "./components/news/news.component";
import { SellCardComponent } from "./components/advertisement/sell-card/sell-card.component";
import { NewsCardComponent } from './components/news/news-card/news-card.component';
import { HomeComponent } from "./home.component";
import { RentCardComponent } from './components/advertisement/rent-card/rent-card.component';

import { SellCardService } from "./services/sell-card.service";
import { RentCardService } from "./services/rent-card.service";
import { NewsCardService } from "./services/news-card.service";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    FormsModule
  ],
    declarations: [
        AdsComponent,
        SearchPanelComponent,
        NewsComponent,
        SellCardComponent,
        NewsCardComponent,
        HomeComponent,
        RentCardComponent
    ],
    exports: [HomeComponent],
    providers: [
        SellCardService,
        RentCardService,
        NewsCardService
    ]
})

export class HomeModule { }
