import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { catchError, tap } from 'rxjs/operators';
import {tags,article} from '../models/interfaces'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articleURL:string = 'http://localhost:5000/article/'
  private tagURL:string = 'http://localhost:5000/tag/'
  constructor(private http:HttpClient) { }
  getArticles(){
      return this.http.get<article[]>(this.articleURL)
  }
  addArticle(article){
    return this.http.post<article[]>(`${this.articleURL}add`, article)
  }
  updateArticle(data,id){
    var _url:string =`${this.articleURL}update/${id}`
    return this.http.post<article[]>(_url,data)
  }  
  getTag(){
    return this.http.get<tags[]>(this.tagURL)
  }
  addTag(tag){
    return this.http.post<tags[]>(`${this.tagURL}add`, tag)
  }
}
