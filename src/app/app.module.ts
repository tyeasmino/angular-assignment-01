import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { TitleOfPageComponent } from './common/title-of-page/title-of-page.component';
import { CardListComponent } from './common/card-list/card-list.component';
import { HtmlcssComponent } from './common/htmlcss/htmlcss.component';
import { JavascriptComponent } from './common/javascript/javascript.component';
import { AngularComponent } from './common/angular/angular.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    TitleOfPageComponent,
    CardListComponent,
    HtmlcssComponent,
    JavascriptComponent,
    AngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
