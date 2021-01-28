import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from '../components/article/article.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import {ArticleService} from '../services/article.service'



@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    CardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
