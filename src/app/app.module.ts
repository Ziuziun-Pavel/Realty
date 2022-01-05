import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './features/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPanelComponent } from './features/home/components/search-panel/search-panel.component';
import { AdsComponent } from './features/home/components/advertisement/advertisement.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './features/home/home.component';
import { NewsComponent } from './features/home/components/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    AdsComponent,
    SearchPanelComponent,
    HomeComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
